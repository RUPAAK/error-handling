import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/BadRequestError";
import { Role } from "../../../../common/types/role";
import { User } from "../../../../model/user";
import jwt from "jsonwebtoken";

const getProfile = async (req: Request, res: Response) => {
  try {
    res.end();
    // res.send("Secret Database Data. Only for Admin. Not for user");
    // const u
  } catch (error) {
    console.log(error);
    throw new BadRequestError(
      (error as any).message ? (error as any).message : "Something bad"
    );
  }
};

export { getProfile as getProfileHandler };
