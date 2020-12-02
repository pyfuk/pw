import * as express from "express";
import { createConnection } from "typeorm";

const app = express();

const connection = createConnection();

app.listen(8888, () => console.log("Server started on port 8888"));
