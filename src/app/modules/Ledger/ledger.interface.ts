export type LedgerType = 'CREDIT' | 'DEBIT';

export interface ILedger {
  id: string;
  millId: string;
  type: LedgerType;
  amount: number;
  description?: string;
  reference?: string;
  transactionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
