export type InventoryType = 'IN' | 'OUT';

export interface IInventory {
  id: string;
  millId: string;
  type: InventoryType;
  itemName: string;
  quantity: number;
  unit?: string;
  note?: string;
  transactionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
