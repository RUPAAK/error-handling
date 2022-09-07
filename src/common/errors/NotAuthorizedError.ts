import { CustomError } from "./custom-error";

export class Notauthorized extends CustomError {
  statusCode = 401;

  constructor() {
    super("User not authorized");

    Object.setPrototypeOf(this, Notauthorized.prototype);
  }

  seralizeErrors() {
    return [{ message: "User not Authorized" }];
  }
}

