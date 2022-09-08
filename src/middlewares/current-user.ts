import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Notauthorized } from "../common/errors/NotAuthorizedError";
import { RequestValidationError } from "../common/errors/RequestValidtionError";
import jwt from "jsonwebtoken";
import { UserDoc } from "../model/user";

interface PayloadType {
  email: string;
  id: string;
  iat: number;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: PayloadType;
      userData?: UserDoc;
    }
  }
}

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) throw new Notauthorized();

  const token = req.headers.authorization.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.SECRET!) as PayloadType;
    req.currentUser = payload;
  } catch (error) {
    throw new Notauthorized();
  }

  next();
};
