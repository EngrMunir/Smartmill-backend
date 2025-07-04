import express from 'express';
import { LedgerController } from './ledger.controller';

const router = express.Router();


router.post('/', LedgerController.create);
router.get('/', LedgerController.getAll);
router.get('/:id', LedgerController.getById);
router.patch('/:id', LedgerController.update);
router.delete('/:id', LedgerController.remove);

export const LedgerRoutes = router;
