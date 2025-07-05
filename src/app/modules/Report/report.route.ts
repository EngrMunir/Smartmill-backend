import express from "express";
import { generateReport } from "./report.controller";

const router = express.Router();

router.get("/:millId", generateReport);

export const ReportRoutes = router;
