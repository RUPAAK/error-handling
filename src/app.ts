import express from "express";
import cors from "cors";
import "express-async-errors";
import { indexAdminRouter } from "./routes/v1/admin";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(indexAdminRouter);

export { app };
