import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { CustomerService } from "./customer.service";

 const createCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.createCustomer(req.body);
    sendResponse(res, {
      statusCode: status.OK, 
      success: true,
      message: "Customer created successfully!",
      data: result,
    });
  })
 const getAllCustomers = catchAsync(async (_req: Request, res: Response) => {
    const result = await CustomerService.getAllCustomers();
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customers retrieved successfully!",
      data: result,
    });
  })

  const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.getSingleCustomer(req.params.id);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customer retrieved successfully!",
      data: result,
    });
  });

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.updateCustomer(req.params.id, req.body);
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customer updated successfully!",
      data: result,
    });
  })
const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
    const result = await CustomerService.deleteCustomer(req.params.id);
    sendResponse(res, {
      statusCode:status.OK,
      success: true,
      message: "Customer deleted successfully!",
      data: result,
    });
  })
export const CustomerController = {
 createCustomer,
 getAllCustomers,
 getSingleCustomer,
 updateCustomer,
 deleteCustomer,
};