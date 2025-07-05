export type SupplierStatus = 'ACTIVE' | 'INACTIVE';

export interface ISupplier {
  id: string;
  millId: string;
  name: string;
  contactPerson?: string;
  phone: string;
  email?: string;
  address?: string;
  status: SupplierStatus;
  createdAt: Date;
  updatedAt: Date;
}
