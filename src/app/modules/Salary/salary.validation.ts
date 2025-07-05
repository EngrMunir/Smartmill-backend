import { z } from 'zod';

export const createSalaryZodSchema = z.object({
  body: z.object({
    millId: z.string(),
    workerId: z.string(),
    baseSalary: z.number(),
    bonus: z.number().optional(),
    deduction: z.number().optional(),
    totalSalary: z.number(),
    salaryMonth: z.string().regex(/^\d{4}-\d{2}$/, "Invalid format. Use YYYY-MM"),
  }),
});
