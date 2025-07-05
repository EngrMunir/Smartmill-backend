import { Request, Response } from "express";
import { SaleService } from "./sale.service";

export const SaleController = {
  create: async (req: Request, res: Response) => {
    try {
      const sale = await SaleService.createSale(req.body);
      res.status(201).json({ success: true, data: sale });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getAll: async (_req: Request, res: Response) => {
    try {
      const sales = await SaleService.getAllSales();
      res.status(200).json({ success: true, data: sales });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const sale = await SaleService.getSaleById(req.params.id);
      res.status(200).json({ success: true, data: sale });
    } catch (error) {
      res.status(404).json({ success: false, message: error.message });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const updated = await SaleService.updateSale(req.params.id, req.body);
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await SaleService.deleteSale(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
};
