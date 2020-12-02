import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() balance: string;

  static fromObj(obj: Object): Account {
    const user = new Account();
    Object.keys(obj).forEach((key) => (user[key] = obj[key]));
    return user;
  }

  static updateById(id, params) {
    return Account.createQueryBuilder()
      .update(Account)
      .set(params)
      .where("id = :id", { id })
      .execute();
  }
}
