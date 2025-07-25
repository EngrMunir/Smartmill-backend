import express from "express";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { productValidationSchema } from "./product.validation";

const router = express.Router();

router.post("/", validateRequest(productValidationSchema), ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getSingleProduct);
router.patch("/:id", validateRequest(productValidationSchema), ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export const ProductRoutes = router;
