import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ProductModel = prisma.product;
