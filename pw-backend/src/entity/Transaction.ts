import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Account } from "./Account";

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((type) => Account)
  @JoinColumn()
  senderAccount: Account;

  @OneToOne((type) => Account)
  @JoinColumn()
  receiverAccount: Account;

  @Column() amount: number;

  static fromObj(obj: Object): Transaction {
    const user = new Transaction();
    Object.keys(obj).forEach((key) => (user[key] = obj[key]));
    return user;
  }

  static updateById(id, params) {
    return Transaction.createQueryBuilder()
      .update(Transaction)
      .set(params)
      .where("id = :id", { id })
      .execute();
  }
}
