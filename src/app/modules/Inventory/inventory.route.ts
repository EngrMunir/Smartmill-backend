import express from 'express';
import * as InventoryController from './inventory.controller';

const router = express.Router();

// Create a new inventory entry
router.post('/', InventoryController.create);

// Get all inventory entries
router.get('/', InventoryController.getAll);

// Get a single inventory entry by ID
router.get('/:id', InventoryController.getById);

// Update an inventory entry
router.patch('/:id', InventoryController.update);

// Delete an inventory entry
router.delete('/:id', InventoryController.remove);

export const InventoryRoutes = router;