import { z } from "zod";

export const ProductValidation = {
  create: z.object({
    body: z.object({
      name: z.string({ required_error: "Product name is required" }),
      category: z.string({ required_error: "Category is required" }),
      unit: z.string({ required_error: "Unit is required" }),
      price: z.number({ required_error: "Price is required" }),
      millId: z.string({ required_error: "Mill ID is required" }),
    }),
  }),

  update: z.object({
    body: z.object({
      name: z.string().optional(),
      category: z.string().optional(),
      unit: z.string().optional(),
      price: z.number().optional(),
    }),
  }),
};
