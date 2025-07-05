export interface IExpense {
  id: string;
  millId: string;
  title: string;
  amount: number;
  category: string;
  expenseDate: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
