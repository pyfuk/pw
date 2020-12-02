import { Request } from "express";
import { User } from "../entity/User";
import { encryptPassword } from "../utils/encrypt";
import { ControllerError } from "../utils/errors";
import * as jwt from "jsonwebtoken";
import { env } from "../environments/environment";

export const AuthController = {
  signup: async (req: Request) => {
    if (!req.body.username || !req.body.password || !req.body.email) {
      throw new ControllerError("Все поля обязательны к заполнению", 400);
    }

    if (await User.findOne({ email: req.body.email }, { select: ["id"] })) {
      throw new ControllerError("Пользователь уже зарегистрирован", 400);
    }

    const user = await User.fromObj({
      username: req.body.username,
      email: req.body.email,
      password: await encryptPassword(req.body.password),
    }).save();

    return {
      token: jwt.sign({ id: user.id }, env.secret),
    };
  },
};
