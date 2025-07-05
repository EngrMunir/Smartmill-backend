import { Request, Response } from "express";
import { ProductService } from "./product.service";

export const ProductController = {
  createProduct: async (req: Request, res: Response) => {
    try {
      const result = await ProductService.createProduct(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to create product", error });
    }
  },

  getAllProducts: async (req: Request, res: Response) => {
    try {
      const { millId } = req.query;
      if (!millId) return res.status(400).json({ success: false, message: "millId is required" });

      const result = await ProductService.getAllProducts(millId as string);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch products", error });
    }
  },

  getSingleProduct: async (req: Request, res: Response) => {
    try {
      const result = await ProductService.getSingleProduct(req.params.id);
      if (!result) return res.status(404).json({ success: false, message: "Product not found" });

      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch product", error });
    }
  },

  updateProduct: async (req: Request, res: Response) => {
    try {
      const result = await ProductService.updateProduct(req.params.id, req.body);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update product", error });
    }
  },

  deleteProduct: async (req: Request, res: Response) => {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete product", error });
    }
  },
};
