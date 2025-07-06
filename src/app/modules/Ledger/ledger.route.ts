import express from 'express';
import { LedgerController } from './ledger.controller';
import { LedgerValidation } from './ledger.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/',
  validateRequest(LedgerValidation.createLedgerValidationSchema),
  LedgerController.createLedger
);

router.get('/', LedgerController.getAllLedgers);
router.get('/:id', LedgerController.getSingleLedger);

router.patch(
  '/:id',
  validateRequest(LedgerValidation.updateLedgerValidationSchema),
  LedgerController.updateLedger
);

router.delete('/:id', LedgerController.deleteLedger);

export const LedgerRoutes = router;
