import { ProductModel } from "./product.model";
import { IProduct } from "./product.interface";

export const ProductService = {
  createProduct: async (data: IProduct) => {
    return await ProductModel.create({ data });
  },

  getAllProducts: async (millId: string) => {
    return await ProductModel.findMany({ where: { millId } });
  },

  getSingleProduct: async (id: string) => {
    return await ProductModel.findUnique({ where: { id } });
  },

  updateProduct: async (id: string, data: Partial<IProduct>) => {
    return await ProductModel.update({
      where: { id },
      data,
    });
  },

  deleteProduct: async (id: string) => {
    return await ProductModel.delete({ where: { id } });
  },
};
