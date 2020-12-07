import { User } from "./User";

export interface Transaction {
  id: number;
  senderAccount: { id: number; balance: number; user: User };
  receiverAccount: { id: number; balance: number; user: User };
  amount: number;
  date: Date;
}
