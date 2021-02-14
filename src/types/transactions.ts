export enum TransactionType {
  DEBIT = "debit",
  CREDIT = "credit",
}

export type Transaction = {
  name: string;
  amount: number;
  type: TransactionType;
  dateTime: string;
};

export type TransactionResponse = {
  accountNumber: number;
  id: number;
  transactions: Transaction[];
};