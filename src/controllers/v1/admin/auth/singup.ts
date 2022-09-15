import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/BadRequestError";
import { Role } from "../../../../common/types/role";
import { User } from "../../../../model/user";
import jwt from "jsonwebtoken";

const signupAdmin = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    const user = await User.build({
      email,
      password,
      name,
      role: Role.user,
    }).save();

    const accessToken = jwt.sign(
      {
        email: email,
        id: user.id,
      },
      "key"
    );

    res.status(201).send({
      accessToken,
      data: user,
    });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message ? (error as any).message : "Something bad"
    );
  }
};

export { signupAdmin as signupAdminHandler };
