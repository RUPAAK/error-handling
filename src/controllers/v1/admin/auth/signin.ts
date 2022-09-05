import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/BadRequestError";

const signinAdmin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new BadRequestError("Email Field not provied");
      // return res.status(400).send({
      //   message: "Email not found",
      // });
    }
  } catch (error) {
    throw new BadRequestError(
      (error as any).message ? (error as any).message : "Something bad"
    );
  }
};

export { signinAdmin as signinAdminHandler };
