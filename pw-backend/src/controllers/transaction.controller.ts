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

    const receiver = await User.createQueryBuilder("user")
      .select(["user.id", "user.email", "account.id", "account.balance"])
      .leftJoin("user.account", "account")
      .where("user.email = :email", { email: req.body.email })
      .getOne();

    if (!receiver) {
      throw new ControllerError("Получатель не найден", 400);
    }

    const sender = await AuthController.info(req);

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
      balance: +sender.account.balance - req.body.amount,
    });

    await Account.updateById(receiver.account.id, {
      balance: +receiver.account.balance + req.body.amount,
    });

    const transaction = await Transaction.fromObj({
      senderAccount: sender,
      receiverAccount: receiver,
      amount: req.body.amount,
    }).save();

    return transaction;
  },
};
