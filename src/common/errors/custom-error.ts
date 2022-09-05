export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract seralizeErrors(): { message: string; field?: string }[];
}

// interface Test {
//   name: string;
// }

// const data: Test[] = [
//   {
//     name: "fjdsi",
//   },
// ];
