export interface IWorker {
  id?: string;
  name: string;
  phone: string;
  role: string;
  salary: number;
  millId: string;
  status?: 'ACTIVE' | 'INACTIVE';
}
