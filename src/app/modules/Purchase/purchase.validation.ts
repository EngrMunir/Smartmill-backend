import { z } from 'zod';

export const createPurchaseZodSchema = z.object({
  body: z.object({
    millId: z.string({ required_error: 'Mill ID is required' }),
    supplierId: z.string({ required_error: 'Supplier ID is required' }),
    productId: z.string({ required_error: 'Product ID is required' }),
    quantity: z.number({ required_error: 'Quantity is required' }),
    unitPrice: z.number({ required_error: 'Unit price is required' }),
    totalPrice: z.number().optional(),
    purchaseDate: z.string().optional(),
    notes: z.string().optional(),
  }),
});
