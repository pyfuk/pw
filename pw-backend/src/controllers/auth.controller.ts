import { Request } from "express";
import { User } from "../entity/User";
import { comparePassword, encryptPassword } from "../utils/encrypt";
import { ControllerError } from "../utils/errors";
import * as jwt from "jsonwebtoken";
import { env } from "../environments/environment";
import { Account } from "../entity/Account";

export const AuthController = {
  signup: async (req: Request) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
      throw new ControllerError("Все поля обязательны к заполнению", 400);
    }

    if (await User.findOne({ email: req.body.email }, { select: ["id"] })) {
      throw new ControllerError("Пользователь уже зарегистрирован", 400);
    }

    const account = await Account.fromObj({
      balance: 500,
    }).save();

    const user = await User.fromObj({
      username: req.body.username,
      email: req.body.email,
      password: await encryptPassword(req.body.password),
      account: account,
    }).save();

    return {
      user: user,
      token: jwt.sign({ id: user.id }, env.secret),
    };
  },

  signin: async (req: Request) => {
    if (!req.body.email || !req.body.password) {
      throw new ControllerError("Все поля обязательны к заполнению", 400);
    }

    const user = await User.createQueryBuilder("user")
      .select([
        "user.id",
        "user.username",
        "user.email",
        "user.password",
        "account.id",
        "account.balance",
      ])
      .where("user.email = :email", { email: req.body.email })
      .leftJoin("user.account", "account")
      .getOne();

    if (!user) {
      throw new ControllerError("Неправильный логин/пароль", 401);
    }
    if (!(await comparePassword(req.body.password, user.password))) {
      throw new ControllerError("Неправильный логин/пароль", 401);
    }

    return {
      user: user,
      token: jwt.sign({ id: user.id }, env.secret),
    };
  },

  info: async (req: Request) => {
    const user = await User.createQueryBuilder("user")
      .select([
        "user.id",
        "user.username",
        "user.email",
        "account.id",
        "account.balance",
      ])
      .leftJoin("user.account", "account")
      .where("user.id = :id", { id: req.body.userId })
      .getOne();

    if (!user) {
      throw new ControllerError("Пользователь не найден", 400);
    }

    return user;
  },
};
