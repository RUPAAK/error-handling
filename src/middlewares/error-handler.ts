import { Request, Response, NextFunction } from "express";
import { CustomError } from "../common/errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.seralizeErrors(),
    });
  }

  return res.status(400).send({
    erros: [
      {
        message: "Something Bad",
      },
    ],
  });
};
