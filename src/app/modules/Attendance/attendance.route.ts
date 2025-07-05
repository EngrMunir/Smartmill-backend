import express from "express";
import { AttendanceController } from "./attendance.controller";

const router = express.Router();

router.post("/", AttendanceController.create);
router.get("/", AttendanceController.getAll);
router.get("/worker/:workerId", AttendanceController.getByWorker);

export const AttendanceRoutes = router;
