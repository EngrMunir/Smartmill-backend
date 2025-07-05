import { z } from 'zod';

export const createSupplierSchema = z.object({
  millId: z.string().uuid(),
  name: z.string().min(1),
  contactPerson: z.string().optional(),
  phone: z.string().min(10),
  email: z.string().email().optional(),
  address: z.string().optional(),
  status: z.enum(['ACTIVE', 'INACTIVE']),
});

export const updateSupplierSchema = createSupplierSchema.partial();
