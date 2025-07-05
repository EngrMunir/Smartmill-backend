import { SupplierModel } from './supplier.model';
import { ISupplier } from './supplier.interface';

export const createSupplier = async (payload: Omit<ISupplier, 'id' | 'createdAt' | 'updatedAt'>) => {
  return await SupplierModel.create({ data: payload });
};

export const getAllSuppliers = async () => {
  return await SupplierModel.findMany({
    include: { mill: true },
    orderBy: { createdAt: 'desc' },
  });
};

export const getSupplierById = async (id: string) => {
  return await SupplierModel.findUnique({ where: { id } });
};

export const updateSupplier = async (id: string, payload: Partial<ISupplier>) => {
  return await SupplierModel.update({
    where: { id },
    data: payload,
  });
};

export const deleteSupplier = async (id: string) => {
  return await SupplierModel.delete({ where: { id } });
};
