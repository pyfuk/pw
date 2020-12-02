import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Account } from "./Account";

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Account)
  senderAccount: Account;

  @ManyToOne((type) => Account)
  receiverAccount: Account;

  @Column() amount: number;

  static fromObj(obj: Object): Transaction {
    const transaction = new Transaction();
    Object.keys(obj).forEach((key) => (transaction[key] = obj[key]));
    return transaction;
  }

  static updateById(id, params) {
    return Transaction.createQueryBuilder()
      .update(Transaction)
      .set(params)
      .where("id = :id", { id })
      .execute();
  }
}
