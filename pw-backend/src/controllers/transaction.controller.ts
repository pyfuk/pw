import { Request } from "express";
import { Account } from "../entity/Account";
import { Transaction } from "../entity/Transaction";
import { User } from "../entity/User";
import { ControllerError } from "../utils/errors";
import { AuthController } from "./auth.controller";

export const TransactionController = {
  addTransaction: async (req: Request) => {
    if (!req.body.email || !req.body.amount) {
      throw new ControllerError("Заполните все поля", 400);
    }

    let receiver = await User.createQueryBuilder("user")
      .select(["user.id", "user.email", "account.id", "account.balance"])
      .leftJoin("user.account", "account")
      .where("user.email = :email", { email: req.body.email })
      .getOne();

    if (!receiver) {
      throw new ControllerError("Получатель не найден", 400);
    }

    let sender = await AuthController.info(req);

    if (sender.id === receiver.id) {
      throw new ControllerError(
        "Вы не можете отправить себе деньги, выбирите другого пользователя",
        400
      );
    }

    if (sender.account.balance < req.body.amount) {
      throw new ControllerError("На счету недостаточно средств", 400);
    }

    await Account.updateById(sender.account.id, {
      balance: sender.account.balance - req.body.amount,
    });

    await Account.updateById(receiver.account.id, {
      balance: +receiver.account.balance + +req.body.amount,
    });

    receiver.account.balance += req.body.amount;
    sender.account.balance -= req.body.amount;

    const transaction = await Transaction.fromObj({
      senderAccount: sender,
      receiverAccount: receiver,
      amount: req.body.amount,
      date: new Date(),
    }).save();

    return transaction;
  },

  transactionHistory: async (req: Request) => {
    const user = await User.createQueryBuilder("user")
      .select(["user.id", "account.id", "account.balance"])
      .leftJoin("user.account", "account")
      .where("user.id = :id", { id: req.body.userId })
      .getOne();

    const transactions = await Transaction.createQueryBuilder("transaction")
      .select([
        "transaction.id",
        "senderAccount.id",
        "senderUser.id",
        "senderUser.email",
        "receiverAccount.id",
        "receiverUser.id",
        "receiverUser.email",
        "transaction.amount",
        "transaction.date",
      ])
      .leftJoin("transaction.senderAccount", "senderAccount")
      .leftJoin("senderAccount.user", "senderUser")
      .leftJoin("transaction.receiverAccount", "receiverAccount")
      .leftJoin("receiverAccount.user", "receiverUser")

      .where("senderAccount.id = :id", { id: user.account.id })
      .orWhere("receiverAccount.id = :id", { id: user.account.id })
      .getMany();

    return transactions;
  },
};
