import { Request, Response } from "express";
import { WorkerService } from "./worker.service";

export const WorkerController = {
  create: async (req: Request, res: Response) => {
    const result = await WorkerService.create(req.body);
    res.status(201).json({ success: true, data: result });
  },

  getAll: async (_req: Request, res: Response) => {
    const result = await WorkerService.getAll();
    res.json({ success: true, data: result });
  },

  getById: async (req: Request, res: Response) => {
    const result = await WorkerService.getById(req.params.id);
    res.json({ success: true, data: result });
  },

  update: async (req: Request, res: Response) => {
    const result = await WorkerService.update(req.params.id, req.body);
    res.json({ success: true, data: result });
  },

  remove: async (req: Request, res: Response) => {
    const result = await WorkerService.remove(req.params.id);
    res.json({ success: true, message: "Worker removed successfully", data: result });
  },
};
