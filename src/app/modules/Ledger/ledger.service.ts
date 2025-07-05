import { PrismaClient } from '@prisma/client';
import { ILedger } from './ledger.interface';

const prisma = new PrismaClient();

const createLedger = async (payload: ILedger) => {
  const newLedger = await prisma.ledger.create({
    data: {
      ...payload,
    },
  });
  return newLedger;
};

const getAllLedgers = async () => {
  const ledgers = await prisma.ledger.findMany({
    include: {
      mill: true,
    },
  });
  return ledgers;
};

const getSingleLedger = async (id: string) => {
  const ledger = await prisma.ledger.findUnique({
    where: { id },
    include: {
      mill: true,
    },
  });
  return ledger;
};

const updateLedger = async (id: string, payload: Partial<ILedger>) => {
  const updatedLedger = await prisma.ledger.update({
    where: { id },
    data: payload,
  });
  return updatedLedger;
};

const deleteLedger = async (id: string) => {
  const deleted = await prisma.ledger.delete({
    where: { id },
  });
  return deleted;
};

export const LedgerService = {
  createLedger,
  getAllLedgers,
  getSingleLedger,
  updateLedger,
  deleteLedger,
};
