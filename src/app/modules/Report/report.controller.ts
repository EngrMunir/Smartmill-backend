import { Request, Response } from "express";
import { generateReportService } from "./report.service";

export const generateReport = async (req: Request, res: Response) => {
  try {
    const millId = req.params.millId;
    const report = await generateReportService(millId);
    res.status(200).json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to generate report", error });
  }
};
