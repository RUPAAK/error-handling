import { CustomError } from "./custom-error";

export class Forbidden extends CustomError {
  statusCode = 403;

  constructor() {
    super("User is forbidden");

    Object.setPrototypeOf(this, Forbidden.prototype);
  }

  seralizeErrors() {
    return [{ message: "User is forbidden" }];
  }
}
