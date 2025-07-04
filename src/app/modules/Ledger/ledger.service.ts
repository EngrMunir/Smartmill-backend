import { Prisma } from "../../../../generated/prisma";
import { ILedger } from "./ledger.interface";
import { LedgerModel } from "./ledger.modal";


export const createLedger = async (payload: Omit<ILedger, 'id' | 'createdAt' | 'updatedAt'>) => {
  return await LedgerModel.create({
    data: {
      ...payload,
      amount: new Prisma.Decimal(payload.amount), // convert number to Decimal
    },
  });
};

const getAllLedgers = async () => {
  return await LedgerModel.findMany({
    include: { mill: true },
    orderBy: { transactionDate: 'desc' },
  });
};

const getLedgerById = async (id: string) => {
  return await LedgerModel.findUnique({ where: { id } });
};

const updateLedger = async (id: string, payload: Partial<ILedger>) => {
  return await LedgerModel.update({
    where: { id },
    data: {
      ...payload,
      amount: payload.amount ? new Prisma.Decimal(payload.amount) : undefined,
    },
  });
};

const deleteLedger = async (id: string) => {
  return await LedgerModel.delete({ where: { id } });
};

export const LedgerService ={
    deleteLedger,
    updateLedger,
    getLedgerById,
    getAllLedgers,
    createLedger
}