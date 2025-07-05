import express from 'express';
import { SalaryController } from './salary.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createSalaryZodSchema } from './salary.validation';

const router = express.Router();

router.post('/', validateRequest(createSalaryZodSchema), SalaryController.create);
router.get('/', SalaryController.getAll);
router.get('/:id', SalaryController.getById);
router.patch('/:id', SalaryController.update);
router.delete('/:id', SalaryController.delete);

export const SalaryRoutes = router;
