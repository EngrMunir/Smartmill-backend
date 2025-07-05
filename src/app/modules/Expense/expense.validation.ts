import { z } from "zod";

export const createExpenseZodSchema = z.object({
  body: z.object({
    millId: z.string({ required_error: "Mill ID is required" }),
    title: z.string({ required_error: "Title is required" }),
    amount: z.number({ required_error: "Amount is required" }),
    category: z.string({ required_error: "Category is required" }),
    expenseDate: z.string({ required_error: "Expense date is required" }),
    notes: z.string().optional(),
  }),
});

export const updateExpenseZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    amount: z.number().optional(),
    category: z.string().optional(),
    expenseDate: z.string().optional(),
    notes: z.string().optional(),
  }),
});
