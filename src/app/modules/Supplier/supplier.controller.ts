import { Request, Response } from 'express';
import * as SupplierService from './supplier.service';

export const create = async (req: Request, res: Response) => {
  try {
    const result = await SupplierService.createSupplier(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('❌ Create Supplier Error:', error);
    res.status(500).json({ error: 'Failed to create supplier' });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await SupplierService.getAllSuppliers();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch suppliers' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const result = await SupplierService.getSupplierById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Supplier not found' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch supplier' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const result = await SupplierService.updateSupplier(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update supplier' });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    await SupplierService.deleteSupplier(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete supplier' });
  }
};
