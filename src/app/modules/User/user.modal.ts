import { PrismaClient } from "../../../../generated/prisma";


const prisma = new PrismaClient();

export const UserModel = prisma.user;
