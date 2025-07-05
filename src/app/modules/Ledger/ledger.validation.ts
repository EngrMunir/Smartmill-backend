import { z } from 'zod';

export const createLedgerZodSchema = z.object({
  body: z.object({
    millId: z.string({ required_error: 'Mill ID is required' }),
    type: z.enum(['CREDIT', 'DEBIT'], { required_error: 'Type is required' }),
    amount: z.number({ required_error: 'Amount is required' }),
    description: z.string().optional(),
    reference: z.string().optional(),
    transactionDate: z.string().optional(), // ISO date format
    partyType: z.enum(['CUSTOMER', 'SUPPLIER'], { required_error: 'Party type is required' }),
    partyId: z.string({ required_error: 'Party ID is required' }),
  }),
});
