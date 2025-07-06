import express from 'express';
import { MillController } from './mill.controller';

const router = express.Router();

router.post('/', MillController.createMill);
router.get('/', MillController.getAllMill);
router.get('/:id', MillController.getMillById);
router.patch('/:id', MillController.updateMill);
router.delete('/:id', MillController.removeMill);

export const MillRoutes = router;
