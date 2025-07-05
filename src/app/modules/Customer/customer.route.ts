import express from "express";
import { CustomerController } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidation } from "./customer.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(CustomerValidation.create),
  CustomerController.createCustomer
);

router.get("/", CustomerController.getAllCustomers);

router.get("/:id", CustomerController.getSingleCustomer);

router.patch(
  "/:id",
  validateRequest(CustomerValidation.update),
  CustomerController.updateCustomer
);

router.delete("/:id", CustomerController.deleteCustomer);

export const CustomerRoutes = router;
