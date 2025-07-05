import { PurchaseModel } from './purchase.model';
import { Prisma } from '@prisma/client';

export const PurchaseService = {
  create: async (payload: Prisma.PurchaseCreateInput) => {
    return await PurchaseModel.create({ data: payload });
  },

  getAll: async () => {
    return await PurchaseModel.findMany({
      include: { mill: true, supplier: true, product: true },
    });
  },

  getById: async (id: string) => {
    return await PurchaseModel.findUnique({
      where: { id },
      include: { mill: true, supplier: true, product: true },
    });
  },

  update: async (id: string, payload: Prisma.PurchaseUpdateInput) => {
    return await PurchaseModel.update({
      where: { id },
      data: payload,
    });
  },

  delete: async (id: string) => {
    return await PurchaseModel.delete({ where: { id } });
  },
};
