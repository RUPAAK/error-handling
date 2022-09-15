import { Request, Response, NextFunction, response } from "express";
import { Forbidden } from "../errors/Forbidden";
import { Role } from "../types/role";

const restrictTo =
  (roles: Role[]) => (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.userData!.role)) {
      throw new Forbidden();
    }
    next();
  };

export { restrictTo };
