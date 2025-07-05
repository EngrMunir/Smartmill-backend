export type LedgerType = 'CREDIT' | 'DEBIT';
export type PartyType = 'CUSTOMER' | 'SUPPLIER';

export interface ILedger {
  id?: string;
  millId: string;
  type: LedgerType;
  amount: number;
  description?: string;
  reference?: string;
  transactionDate?: Date;
  partyType: PartyType;
  partyId: string;
}
