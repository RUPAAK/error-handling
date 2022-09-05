import { Request, Response } from "express";
import { BadRequestError } from "../../../../errors/bad-request-error";

const signinAdmin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    throw new BadRequestError("Failed");
  } catch (error) {
    throw new BadRequestError(
      (error as any).message ? (error as any).message : "Failed to login"
    );
  }
};

export { signinAdmin as signinAdminHandler };
