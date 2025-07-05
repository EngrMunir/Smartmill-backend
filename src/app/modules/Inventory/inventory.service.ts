import { InventoryModel } from './inventory.model';
import { IInventory } from './inventory.interface';
import { Prisma } from '../../../../generated/prisma';


export const createInventory = async (payload: Omit<IInventory, 'id' | 'createdAt' | 'updatedAt'>) => {
  return await InventoryModel.create({
    data: {
      ...payload,
      quantity: new Prisma.Decimal(payload.quantity),
    },
  });
};

export const getAllInventories = async () => {
  return await InventoryModel.findMany({
    include: { mill: true },
    orderBy: { transactionDate: 'desc' },
  });
};

export const getInventoryById = async (id: string) => {
  return await InventoryModel.findUnique({ where: { id } });
};

export const updateInventory = async (id: string, payload: Partial<IInventory>) => {
  return await InventoryModel.update({
    where: { id },
    data: {
      ...payload,
      quantity: payload.quantity ? new Prisma.Decimal(payload.quantity) : undefined,
    },
  });
};

export const deleteInventory = async (id: string) => {
  return await InventoryModel.delete({ where: { id } });
};
