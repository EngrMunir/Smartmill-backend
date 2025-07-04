import { z } from 'zod';

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'MANAGER', 'MILLER']),
  millId: z.string().uuid(),
  status: z.enum(['ACTIVE', 'BLOCKED']),
  needsPasswordChange: z.boolean(),
});

export const updateUserSchema = createUserSchema.partial();