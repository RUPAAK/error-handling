import { Request, Response, NextFunction } from "express";
import { User } from "../../model/user";
import { Notauthorized } from "../errors/NotAuthorizedError";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new Notauthorized();
  }
  const existUserData = await User.findById(req.currentUser.id);

  if (!existUserData) {
    throw new Notauthorized();
  }

  req.userData = existUserData;

  next();
};
