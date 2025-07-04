import { IUser } from './user.interface';
import { UserModel } from './user.modal';

export const createUser = async (payload: Partial<IUser>) => {
  return await UserModel.create({ data: payload });
};

export const getAllUsers = async () => {
  return await UserModel.findMany({ include: { mill: true } });
};

export const getUserById = async (id: string) => {
  return await UserModel.findUnique({ where: { id } });
};

export const updateUser = async (id: string, payload: Partial<IUser>) => {
  return await UserModel.update({ where: { id }, data: payload });
};

export const deleteUser = async (id: string) => {
  return await UserModel.delete({ where: { id } });
};
