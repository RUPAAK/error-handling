import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { Notauthorized } from "../common/errors/NotAuthorizedError";
import { RequestValidationError } from "../common/errors/RequestValidtionError";
import jwt from "jsonwebtoken";
import { Forbidden } from "../common/errors/Forbidden";
import { Role } from "../common/types/role";

export const validateRole =
  (role: Role[]) => (req: Request, res: Response, next: NextFunction) => {
    if (!role.includes(req.userData!.role)) throw new Forbidden();
    next();
  };
