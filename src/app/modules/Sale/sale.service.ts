import { ISale } from "./sale.interface";
import { SaleModel } from "./sale.model";

export const SaleService = {
  createSale: async (payload: ISale) => {
    // Optionally calculate totalPrice here: quantity * unitPrice
    const totalPrice = (
      Number(payload.quantity) * parseFloat(payload.unitPrice)
    ).toFixed(2);

    const saleData = {
      ...payload,
      totalPrice,
    };

    return await SaleModel.create(saleData);
  },

  getAllSales: async () => {
    return await SaleModel.getAll();
  },

  getSaleById: async (id: string) => {
    return await SaleModel.getById(id);
  },

  updateSale: async (id: string, updates: Partial<ISale>) => {
    if (updates.quantity && updates.unitPrice) {
      updates.totalPrice = (
        Number(updates.quantity) * parseFloat(updates.unitPrice)
      ).toFixed(2);
    }
    return await SaleModel.update(id, updates);
  },

  deleteSale: async (id: string) => {
    return await SaleModel.delete(id);
  },
};
