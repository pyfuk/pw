import * as express from "express";
import { NextFunction, Request, Response } from "express";
import { createConnection } from "typeorm";
import { routes } from "./routing";

const app = express();

const connection = createConnection();

routes.forEach((r) => {
  const handler = async (req: Request, res: Response) => {
    try {
      const result = await r.handler(req);
      return res.send(result);
    } catch (e) {
      e.status = e.status || 500;
      res.status(e.status).send(e.message);
    }
  };

  const varifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (r.varifyToken) {
      try {
        await r.varifyToken(req, res, next);
      } catch (e) {
        e.status = e.status || 500;
        res.status(e.status).send(e.message);
      }
    } else {
      next();
    }
  };

  app[r.method]("/api" + r.url, varifyToken, handler);
});

app.listen(8888, () => console.log("Server started on port 8888"));
