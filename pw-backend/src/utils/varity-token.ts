import { Request, Response, NextFunction } from "express";
import { ControllerError } from "./errors";
import * as jwt from "jsonwebtoken";
import { env } from "../environments/environment";

export const varifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.body.token = token;

    jwt.verify(token, env.secret, (err, authData) => {
      if (err) {
        throw new ControllerError("Токен не действителен", 403);
      } else {
        req.body.userId = authData.id;
      }
    });
    next();
  } else {
    throw new ControllerError("Требуется токен", 403);
  }
};
