import { Request, Response } from 'express';
import { SalaryService } from './salary.service';

export const SalaryController = {
  create: async (req: Request, res: Response) => {
    const result = await SalaryService.createSalary(req.body);
    res.status(201).json({ success: true, data: result });
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await SalaryService.getAllSalaries();
    res.status(200).json({ success: true, data: result });
  },

  getById: async (req: Request, res: Response) => {
    const result = await SalaryService.getSalaryById(req.params.id);
    res.status(200).json({ success: true, data: result });
  },

  update: async (req: Request, res: Response) => {
    const result = await SalaryService.updateSalary(req.params.id, req.body);
    res.status(200).json({ success: true, data: result });
  },

  delete: async (req: Request, res: Response) => {
    const result = await SalaryService.deleteSalary(req.params.id);
    res.status(200).json({ success: true, data: result });
  },
};
