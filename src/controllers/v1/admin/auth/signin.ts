import { Request, Response } from "express";

const signinAdmin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
  } catch (error) {
    console.log(error);
  }
};

export { signinAdmin as signinAdminHandler };
