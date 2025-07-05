import express from 'express';
import * as SupplierController from './supplier.controller';

const router = express.Router();

// Create a new supplier
router.post('/', SupplierController.create);

// Get all suppliers
router.get('/', SupplierController.getAll);

// Get a supplier by ID
router.get('/:id', SupplierController.getById);

// Update a supplier
router.patch('/:id', SupplierController.update);

// Delete a supplier
router.delete('/:id', SupplierController.remove);

export const SupplierRoutes = router;
