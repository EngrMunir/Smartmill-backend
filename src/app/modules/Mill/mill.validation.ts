import { z } from 'zod';

export const createMillSchema = z.object({
    name: z.string().min(1),
    location:z.string().min(1),
    ownerName: z.string().min(1),
    phone:z.string().min(10),
    email:z.string().email().optional(),
});

export const updateMillSchema = createMillSchema.partial();