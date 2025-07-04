import express from 'express';
import * as UserController from './user.controller';

const router = express.Router();

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.remove);

export const UserRoutes = router;
