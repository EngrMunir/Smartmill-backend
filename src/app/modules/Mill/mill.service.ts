import { MillModel } from './mill.model';
import { IMill } from './mill.interface';

export const createMill = async (payload: Partial<IMill>) => {
  return await MillModel.create({ data: payload });
};

export const getAllMills = async () => {
  return await MillModel.findMany();
};

export const getMillById = async (id: string) => {
  return await MillModel.findUnique({ where: { id } });
};

export const updateMill = async (id: string, payload: Partial<IMill>) => {
  return await MillModel.update({ where: { id }, data: payload });
};

export const deleteMill = async (id: string) => {
  return await MillModel.delete({ where: { id } });
};
