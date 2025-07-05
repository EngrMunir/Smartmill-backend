import express from "express";
import { SaleController } from "./sale.controller";
import validateRequest from "../../middlewares/validateRequest";
import { saleValidation } from "./sale.validation";

const router = express.Router();

router.post("/", validateRequest(saleValidation.create), SaleController.create);
router.get("/", SaleController.getAll);
router.get("/:id", SaleController.getById);
router.patch("/:id", validateRequest(saleValidation.update), SaleController.update);
router.delete("/:id", SaleController.delete);

export const SaleRoutes = router;
