import { z } from "zod";

export const WorkerValidation = z.object({
  body: z.object({
    name: z.string().min(1),
    phone: z.string().min(6),
    role: z.string(),
    salary: z.number().positive(),
    millId: z.string().uuid(),
    status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  }),
});
