import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";

import dotenv from "dotenv";
import { UserDoc } from "../../model/user";
import { Notauthorized } from "../errors/NotAuthorizedError";

dotenv.config;

interface UserPayload {
  id: string;
  email: string;
  iat: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
      userData?: UserDoc;
    }
  }
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    throw new Notauthorized();
  }

  const jwtToken = req.headers.authorization.split(" ")[1];
  // console.log(jwtToken)
  try {
    const payload = jwt.verify(
      jwtToken,
      "key"
      // process.env.SECRET!
      // process.env.JWT_KEY!
    ) as unknown as UserPayload;

    req.currentUser = payload;
  } catch (err) {
    throw new Notauthorized();
  }

  next();
};
