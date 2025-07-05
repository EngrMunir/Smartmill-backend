import { PrismaClient } from "@/generated/prisma";
import { ISale } from "./sale.interface";

const prisma = new PrismaClient();

export const SaleModel = {
  create: async (data: ISale) => {
    return await prisma.sale.create({ data });
  },

  getAll: async () => {
    return await prisma.sale.findMany({
      include: {
        mill: true,
        customer: true,
        product: true,
      },
    });
  },

  getById: async (id: string) => {
    return await prisma.sale.findUnique({
      where: { id },
      include: {
        mill: true,
        customer: true,
        product: true,
      },
    });
  },

  update: async (id: string, data: Partial<ISale>) => {
    return await prisma.sale.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return await prisma.sale.delete({
      where: { id },
    });
  },
};
