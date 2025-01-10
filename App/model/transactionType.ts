export type paymentMethod = 'debit' | 'credit';
export interface TransactionData {
  amount: number;
  date: string;
  description: string;
  type: paymentMethod;
}
