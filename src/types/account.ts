export enum AccountStatus {
  ACTIVE = "active",
  PENDING = "pending"
}

export type Account = {
  type: string;
  id: string;
  name: string;
  status: AccountStatus;
  balance: number;
};