import express from 'express';
import { PurchaseController } from './purchase.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createPurchaseZodSchema } from './purchase.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(createPurchaseZodSchema),
  PurchaseController.create
);
router.get('/', PurchaseController.getAll);
router.get('/:id', PurchaseController.getById);
router.patch('/:id', PurchaseController.update);
router.delete('/:id', PurchaseController.delete);

export const PurchaseRoutes = router;
