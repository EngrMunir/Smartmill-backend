import express from "express";
import { WorkerController } from "./worker.controller";
import validateRequest from "../../middlewares/validateRequest";
import { WorkerValidation } from "./worker.validation";

const router = express.Router();

router.post("/", validateRequest(WorkerValidation), WorkerController.create);
router.get("/", WorkerController.getAll);
router.get("/:id", WorkerController.getById);
router.patch("/:id", WorkerController.update);
router.delete("/:id", WorkerController.remove);

export const WorkerRoutes = router;
