import express from 'express';
import * as MillController from './mill.controller';

const router = express.Router();

router.post('/', MillController.create);
router.get('/', MillController.getAll);
router.get('/:id', MillController.getById);
router.patch('/:id', MillController.update);
router.delete('/:id', MillController.remove);

export const MillRoutes = router;
