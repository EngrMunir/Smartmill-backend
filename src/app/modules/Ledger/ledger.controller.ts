import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LedgerService } from './ledger.service';

const createLedger = catchAsync(async (req: Request, res: Response) => {
  const result = await LedgerService.createLedger(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Ledger entry created successfully!',
    data: result,
  });
});

const getAllLedgers = catchAsync(async (req: Request, res: Response) => {
  const result = await LedgerService.getAllLedgers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All ledger entries retrieved successfully!',
    data: result,
  });
});

const getSingleLedger = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LedgerService.getSingleLedger(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Ledger entry retrieved successfully!',
    data: result,
  });
});

const updateLedger = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LedgerService.updateLedger(id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Ledger entry updated successfully!',
    data: result,
  });
});

const deleteLedger = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LedgerService.deleteLedger(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Ledger entry deleted successfully!',
    data: result,
  });
});

export const LedgerController = {
  createLedger,
  getAllLedgers,
  getSingleLedger,
  updateLedger,
  deleteLedger,
};
