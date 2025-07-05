import { z } from "zod";

export const createCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Customer name is required"),
    phone: z.string().min(6, "Phone number is required"),
    address: z.string().optional(),
    email: z.string().email("Invalid email format").optional(),
    millId: z.string().uuid("Mill ID must be a valid UUID"),
  }),
});

export const updateCustomerZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    email: z.string().email("Invalid email format").optional(),
  }),
});
