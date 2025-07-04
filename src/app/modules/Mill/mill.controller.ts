import { Request, Response } from 'express';
import * as MillService from './mill.service';

export const create = async (req: Request, res: Response) => {
  const result = await MillService.createMill(req.body);
  res.status(201).json(result);
};

export const getAll = async (_: Request, res: Response) => {
  const result = await MillService.getAllMills();
  res.json(result);
};

export const getById = async (req: Request, res: Response) => {
  const result = await MillService.getMillById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await MillService.updateMill(req.params.id, req.body);
  res.json(result);
};

export const remove = async (req: Request, res: Response) => {
  await MillService.deleteMill(req.params.id);
  res.status(204).send();
};
