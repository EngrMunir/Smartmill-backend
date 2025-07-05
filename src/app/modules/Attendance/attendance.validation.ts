import { z } from "zod";

export const createAttendanceSchema = z.object({
  millId: z.string(),
  workerId: z.string(),
  date: z.coerce.date(),
  status: z.enum(['PRESENT', 'ABSENT', 'LEAVE']),
  notes: z.string().optional(),
});
