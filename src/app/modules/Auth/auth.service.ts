import { UserRole, UserStatus } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma"
import * as bcrypt from 'bcrypt';
import { Secret } from 'jsonwebtoken';
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";

const loginUser = async(payload:{
    email:string,
    password:string
})=>{
    const userData = await prisma.user.findUniqueOrThrow({
        where:{
            email:payload.email,
            status:UserStatus.ACTIVE
        }
    });

    const isCorrectPassword: boolean = await bcrypt.compare(payload.password, userData.password);

    if(!isCorrectPassword){
        throw new Error('Password incorrect!');
    }

    const accessToken = jwtHelpers.generateToken({
        email:userData.email,
        role:userData.role,
        millId: userData.millId,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
);

    const refreshToken = jwtHelpers.generateToken({
        email:userData.email,
        role:userData.role,
        millId: userData.millId,
    },
    config.jwt.refresh_token_secret as Secret,
    config.jwt.refresh_token_expires_in as string
);


    return {
        accessToken,
        refreshToken,
        needsPasswordChange: userData.needsPasswordChange
    };
}

const refreshToken = async(token:string)=>{
    let decodedData;
    try {
         decodedData = jwtHelpers.verifyToken(token, config.jwt.refresh_token_secret as Secret);
    } catch (err) {
        throw new Error("You are not authorized!");
    }
    const userData = await prisma.user.findUniqueOrThrow({
        where:{
            email:decodedData.email,
            status:UserStatus.ACTIVE
        }
    });

      const accessToken = jwtHelpers.generateToken({
        email:userData.email,
        role:userData.role,
        millId: userData.millId,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
);

    return {
        accessToken,
        needsPasswordChange: userData.needsPasswordChange
    };

}

const changePassword =async(user:any, payload:any)=>{
    const userData = await prisma.user.findUniqueOrThrow({
        where:{
            email:user.email,
            status:UserStatus.ACTIVE
        }
    });

    const isCorrectPassword: boolean = await bcrypt.compare(payload.oldPassword, userData.password);

    if(!isCorrectPassword){
        throw new Error('Password incorrect!');
    }
    const hashedPassword: string = await bcrypt.hash(payload.newPassword, 12);

    await prisma.user.update({
        where:{
            email:userData.email
        },
        data:{
            password:hashedPassword,
            needsPasswordChange:false
        }
    })
    return {
        message:"Password Changed Successfully!"
    }

}

const forgotPassword = async(payload:{email:string}) =>{
    const userData = await prisma.user.findUniqueOrThrow({
        where:{
            email:payload.email,
            status:UserStatus.ACTIVE
        }
    });
    const resetPasswordToken = jwtHelpers.generateToken(
        {email:userData.email, role:userData.role},
        config.jwt.reset_pass_secret as Secret,
        config.jwt.reset_pass_expires_in as string
    )
    console.log(resetPasswordToken);

    const resetPassLink = config.reset_pass_link + `?email=${userData.id}&token=${resetPasswordToken}`

    // http://localhost:3000/reset-pass?email=abc@gmail.com&token=kjertsjfd
}

const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
  millId: string;
  role?: UserRole;
}) => {
  const existing = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (existing) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(payload.password, 12);

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      role: payload.role || UserRole.MILLER,
      millId: payload.millId,
      status: UserStatus.ACTIVE,
      needsPasswordChange: false,
    },
  });

  return user;
};

export const AuthServices ={
    loginUser,
    refreshToken,
    changePassword,
    forgotPassword,
    registerUser
}