export interface ISale {
  id?: string;
  millId: string;
  customerId: string;
  productId: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
  saleDate?: string;
  notes?: string;
}
