export interface UserData {
  name: string;
  email: string;
  transactions: UserTransaction[];
}

export interface UserTransaction {
  transactionId: string;
  type: string;
  value: number;
  date: string;
  description: string;
}
