import { Request, Response } from "express";
import {
  createExpense,
  getAllExpenses,
  getSingleExpense,
  updateExpense,
  deleteExpense,
} from "./expense.service";

export const handleCreateExpense = async (req: Request, res: Response) => {
  try {
    const result = await createExpense(req.body);
    res.status(201).json({
      success: true,
      message: "Expense created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create expense",
      error: (error as Error).message,
    });
  }
};

export const handleGetAllExpenses = async (_req: Request, res: Response) => {
  try {
    const result = await getAllExpenses();
    res.status(200).json({
      success: true,
      message: "Expenses fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch expenses",
      error: (error as Error).message,
    });
  }
};

export const handleGetSingleExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getSingleExpense(id);
    res.status(200).json({
      success: true,
      message: "Expense fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Expense not found",
      error: (error as Error).message,
    });
  }
};

export const handleUpdateExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await updateExpense(id, req.body);
    res.status(200).json({
      success: true,
      message: "Expense updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update expense",
      error: (error as Error).message,
    });
  }
};

export const handleDeleteExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteExpense(id);
    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete expense",
      error: (error as Error).message,
    });
  }
};
