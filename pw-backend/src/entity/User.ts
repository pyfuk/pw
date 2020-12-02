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
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() username: string;
  @Column() password: string;
  @Column() email: string;

  @OneToOne((type) => Account)
  @JoinColumn()
  account: Account;

  static fromObj(obj: Object): User {
    const user = new User();
    Object.keys(obj).forEach((key) => (user[key] = obj[key]));
    return user;
  }

  static updateById(id, params) {
    return User.createQueryBuilder()
      .update(User)
      .set(params)
      .where("id = :id", { id })
      .execute();
  }
}
