import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid field props");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  seralizeErrors() {
    return this.errors.map((each) => {
      return {
        message: each.msg,
        field: each.param,
      };
    });
  }
}

//notauthorized - 401 forbidden-403
