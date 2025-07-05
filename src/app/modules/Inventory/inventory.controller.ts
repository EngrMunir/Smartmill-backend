import { Request, Response } from 'express';
import * as InventoryService from './inventory.service';

export const create = async (req: Request, res: Response) => {
  try {
    const result = await InventoryService.createInventory(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('❌ Create Inventory Error:', error);
    res.status(500).json({ error: 'Failed to create inventory entry' });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await InventoryService.getAllInventories();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventories' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const result = await InventoryService.getInventoryById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Inventory not found' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventory' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const result = await InventoryService.updateInventory(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update inventory' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await InventoryService.deleteInventory(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete inventory' });
  }
};
