import express from "express";
import {
  handleCreateExpense,
  handleDeleteExpense,
  handleGetAllExpenses,
  handleGetSingleExpense,
  handleUpdateExpense,
} from "./expense.controller";
import validateRequest from "../../middlewares/validateRequest";
import { expenseValidationSchema } from "./expense.validation";

const router = express.Router();

router.post("/", validateRequest(expenseValidationSchema), handleCreateExpense);
router.get("/", handleGetAllExpenses);
router.get("/:id", handleGetSingleExpense);
router.patch("/:id", validateRequest(expenseValidationSchema), handleUpdateExpense);
router.delete("/:id", handleDeleteExpense);

export const ExpenseRoutes = router;
