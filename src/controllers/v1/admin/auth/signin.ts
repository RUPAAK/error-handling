import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/BadRequestError";
import { Role } from "../../../../common/types/role";
import { User } from "../../../../model/user";
import jwt from "jsonwebtoken";

const signinAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (!existUser) throw new BadRequestError("user not found");

    const accessToken = jwt.sign(
      {
        email: email,
        id: existUser.id,
      },
      process.env.SECRET!
    );

    res.status(200).send({
      accessToken,

      data: existUser,
    });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message ? (error as any).message : "Something bad"
    );
  }
};

export { signinAdmin as signinAdminHandler };
