import { Request, Response, NextFunction } from "express";
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
];
