import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/BadRequestError";
import { Role } from "../../../../common/types/role";
import { User } from "../../../../model/user";

const signinAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = User.build({ email, password, role: Role.admin });

    const createdUser = await user.save();
    
    res.send("Working");
  } catch (error) {
    throw new BadRequestError(
      (error as any).message ? (error as any).message : "Something bad"
    );
  }
};

export { signinAdmin as signinAdminHandler };
