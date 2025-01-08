export type paymentMethod = 'debit' | 'credit';
export interface transactionData {
  amount: number;
  date: string; // You could also use `Date` if you want to store as a Date object
  description: string;
  type: paymentMethod; // You can restrict 'type' to specific values like 'debit' or 'credit'
}
