import { PrismaClient } from "@prisma/client";
import { IExpense } from "./expense.interface";

const prisma = new PrismaClient();

export const createExpense = async (payload: IExpense) => {
  const result = await prisma.expense.create({
    data: payload,
  });
  return result;
};

export const getAllExpenses = async () => {
  const result = await prisma.expense.findMany({
    include: {
      mill: true,
    },
    orderBy: {
      expenseDate: "desc",
    },
  });
  return result;
};

export const getSingleExpense = async (id: string) => {
  const result = await prisma.expense.findUnique({
    where: { id },
    include: {
      mill: true,
    },
  });
  return result;
};

export const updateExpense = async (id: string, payload: Partial<IExpense>) => {
  const result = await prisma.expense.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const deleteExpense = async (id: string) => {
  const result = await prisma.expense.delete({
    where: { id },
  });
  return result;
};
