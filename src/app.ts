import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { indexAdminRouter } from "./routes/v1/admin";
import { errorHandler } from "./common/errors/error-handler";
import { NotFoundError } from "./common/errors/NotFoundError";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(indexAdminRouter);


app.all("*", (re: Request, res: Response) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
