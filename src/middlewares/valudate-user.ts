import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Notauthorized } from "../common/errors/NotAuthorizedError";
import { RequestValidationError } from "../common/errors/RequestValidtionError";
import jwt from "jsonwebtoken";
import { User } from "../model/user";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) throw new Notauthorized();

  const existUser = await User.findById(req.currentUser.id);

  if (!existUser) throw new Notauthorized();

  req.userData = existUser;

  next();
};
