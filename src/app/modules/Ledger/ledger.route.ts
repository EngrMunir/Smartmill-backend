import express from 'express';
import { LedgerController } from './ledger.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { LedgerValidation } from './ledger.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(LedgerValidation.createLedgerZodSchema),
  LedgerController.createLedger
);

router.get('/', LedgerController.getAllLedgers);
router.get('/:id', LedgerController.getSingleLedger);

router.patch(
  '/:id',
  validateRequest(LedgerValidation.updateLedgerZodSchema),
  LedgerController.updateLedger
);

router.delete('/:id', LedgerController.deleteLedger);

export const LedgerRoutes = router;
