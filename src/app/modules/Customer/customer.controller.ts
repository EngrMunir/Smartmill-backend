import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CustomerService } from "./customer.service";

export const CustomerController = {
  createCustomer: catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomer(req.body);
    sendResponse(res, {
      success: true,
      message: "Customer created successfully!",
      data: result,
    });
  }),

  getAllCustomers: catchAsync(async (_req: Request, res: Response) => {
    const result = await CustomerService.getAllCustomers();
    sendResponse(res, {
      success: true,
      message: "Customers retrieved successfully!",
      data: result,
    });
  }),

  getSingleCustomer: catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.getSingleCustomer(req.params.id);
    sendResponse(res, {
      success: true,
      message: "Customer retrieved successfully!",
      data: result,
    });
  }),

  updateCustomer: catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.updateCustomer(req.params.id, req.body);
    sendResponse(res, {
      success: true,
      message: "Customer updated successfully!",
      data: result,
    });
  }),

  deleteCustomer: catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.deleteCustomer(req.params.id);
    sendResponse(res, {
      success: true,
      message: "Customer deleted successfully!",
      data: result,
    });
  }),
};