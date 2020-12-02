import { Request, Response, NextFunction } from "express";
import { AuthController } from "./controllers/auth.controller";
import { PingController } from "./controllers/ping.controller";

export interface Route {
  method: "get" | "post" | "delete" | "put";
  url: string;
  varifyToken?: (req: Request, res: Response, next: NextFunction) => void;
  handler: (req: Request) => Promise<any>;
}

export const routes: Route[] = [
  /** Ping */
  { method: "get", url: "/ping", handler: PingController.ping },

  /** Auth */
  { method: "post", url: "/signup", handler: AuthController.signup },
  { method: "post", url: "/signin", handler: AuthController.signin },
];
