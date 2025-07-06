import { MillModel } from './mill.model';
import { IMill } from './mill.interface';

const createMill = async (payload: Partial<IMill>) => {
  return await MillModel.create({ data: payload });
};

const getAllMills = async () => {
  return await MillModel.findMany();
};

const getMillById = async (id: string) => {
  return await MillModel.findUnique({ where: { id } });
};

const updateMill = async (id: string, payload: Partial<IMill>) => {
  return await MillModel.update({ where: { id }, data: payload });
};

const deleteMill = async (id: string) => {
  return await MillModel.delete({ where: { id } });
};

export const MillServices ={
  createMill,
  getAllMills,
  getMillById,
  updateMill,
  deleteMill
}