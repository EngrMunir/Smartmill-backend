import { Request, Response } from 'express';
import { PurchaseService } from './purchase.service';

export const PurchaseController = {
  create: async (req: Request, res: Response) => {
    const result = await PurchaseService.create(req.body);
    res.status(201).json({ success: true, data: result });
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await PurchaseService.getAll();
    res.json({ success: true, data: result });
  },

  getById: async (req: Request, res: Response) => {
    const result = await PurchaseService.getById(req.params.id);
    res.json({ success: true, data: result });
  },

  update: async (req: Request, res: Response) => {
    const result = await PurchaseService.update(req.params.id, req.body);
    res.json({ success: true, data: result });
  },

  delete: async (req: Request, res: Response) => {
    await PurchaseService.delete(req.params.id);
    res.json({ success: true, message: 'Purchase deleted successfully' });
  },
};
