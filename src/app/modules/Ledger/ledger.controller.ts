import { Request, Response } from 'express';
import { LedgerService } from './ledger.service';

const create = async (req: Request, res: Response) => {
  try {
    const result = await LedgerService.createLedger(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Ledger create error:', error);
    res.status(500).json({ error: 'Failed to create ledger entry' });
  }
};

const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await LedgerService.getAllLedgers();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ledgers' });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const result = await LedgerService.getLedgerById(req.params.id);
    if (!result) return res.status(404).json({ error: 'Ledger not found' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ledger' });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const result = await LedgerService.updateLedger(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update ledger' });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    await LedgerService.deleteLedger(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete ledger' });
  }
};

export const LedgerController ={
    remove,
    update,
    create,
    getAll,
    getById
}