export interface IProduct {
  id?: string;
  name: string;
  category: string;
  unit: string;
  price: number;
  millId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
