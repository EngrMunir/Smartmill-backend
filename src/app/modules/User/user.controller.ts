import { Request, Response } from 'express';
import * as UserService from './user.service';

export const create = async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);
  res.status(201).json(result);
};

export const getAll = async (_: Request, res: Response) => {
  const result = await UserService.getAllUsers();
  res.json(result);
};

export const getById = async (req: Request, res: Response) => {
  const result = await UserService.getUserById(req.params.id);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await UserService.updateUser(req.params.id, req.body);
  res.json(result);
};

export const remove = async (req: Request, res: Response) => {
  await UserService.deleteUser(req.params.id);
  res.status(204).send();
};
