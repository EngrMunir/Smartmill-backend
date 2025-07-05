import { z } from "zod";

const createSaleZodSchema = z.object({
  body: z.object({
    millId: z.string({ required_error: "Mill ID is required" }),
    customerId: z.string({ required_error: "Customer ID is required" }),
    productId: z.string({ required_error: "Product ID is required" }),
    quantity: z.number({ required_error: "Quantity is required" }),
    unitPrice: z.number({ required_error: "Unit Price is required" }),
    totalPrice: z.number({ required_error: "Total Price is required" }),
    saleDate: z.string().datetime().optional(),
    notes: z.string().optional(),
  }),
});

const updateSaleZodSchema = z.object({
  body: z.object({
    millId: z.string().optional(),
    customerId: z.string().optional(),
    productId: z.string().optional(),
    quantity: z.number().optional(),
    unitPrice: z.number().optional(),
    totalPrice: z.number().optional(),
    saleDate: z.string().datetime().optional(),
    notes: z.string().optional(),
  }),
});

export const saleValidation = {
  create: createSaleZodSchema,
  update: updateSaleZodSchema,
};
