import { z } from 'zod';

export const createInventorySchema = z.object({
  millId: z.string().uuid(),
  type: z.enum(['IN', 'OUT']),
  itemName: z.string().min(1),
  quantity: z.number().positive(),
  unit: z.string().optional(), // e.g., kg, bag, ton
  note: z.string().optional(),
  transactionDate: z.string().optional(), // default handled by DB
});

export const updateInventorySchema = createInventorySchema.partial();
