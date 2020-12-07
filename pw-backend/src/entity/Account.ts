import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() balance: number;

  @OneToOne(() => User, (user) => user.account)
  user: User;

  static fromObj(obj: Object): Account {
    const account = new Account();
    Object.keys(obj).forEach((key) => (account[key] = obj[key]));
    return account;
  }

  static updateById(id, params) {
    return Account.createQueryBuilder()
      .update(Account)
      .set(params)
      .where("id = :id", { id })
      .execute();
  }
}
