export type IPurchase = {
  id: string;
  millId: string;
  supplierId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  purchaseDate: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
};
