import { Request, Response } from "express";
import { AttendanceService } from "./attendance.service";
import { createAttendanceSchema } from "./attendance.validation";

export const AttendanceController = {
  create: async (req: Request, res: Response) => {
    const parsed = createAttendanceSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);

    const attendance = await AttendanceService.create(parsed.data);
    res.status(201).json(attendance);
  },
  getAll: async (_req: Request, res: Response) => {
    const list = await AttendanceService.getAll();
    res.json(list);
  },
  getByWorker: async (req: Request, res: Response) => {
    const { workerId } = req.params;
    const list = await AttendanceService.getByWorker(workerId);
    res.json(list);
  },
};
