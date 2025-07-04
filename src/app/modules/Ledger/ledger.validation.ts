import { z } from 'zod';

export const createLedgerSchema = z.object({
  millId: z.string().uuid(),
  type: z.enum(['CREDIT', 'DEBIT']),
  amount: z.number().positive(),
  description: z.string().optional(),
  reference: z.string().optional(),
  transactionDate: z.string().optional(), // optional — defaults to now()
});

export const updateLedgerSchema = createLedgerSchema.partial();
