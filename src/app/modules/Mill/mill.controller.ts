import { Request, Response } from 'express';
import { MillServices } from './mill.service';

const createMill = async (req: Request, res: Response) => {
  const result = await MillServices.createMill(req.body);
  res.status(201).json(result);
};

const getAllMill = async (_: Request, res: Response) => {
  const result = await MillServices.getAllMills();
  res.json(result);
};

const getMillById = async (req: Request, res: Response) => {
  const result = await MillServices.getMillById(req.params.id);
  res.json(result);
};

const updateMill = async (req: Request, res: Response) => {
  const result = await MillServices.updateMill(req.params.id, req.body);
  res.json(result);
};

const removeMill = async (req: Request, res: Response) => {
  await MillServices.deleteMill(req.params.id);
  res.status(204).send();
};

export const MillController ={
  createMill,
  getAllMill,
  getMillById,
  removeMill,
  updateMill
}
