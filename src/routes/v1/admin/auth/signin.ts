import { Router } from "express";
import { signinAdminHandler } from "../../../../controllers/v1/admin/auth/signin";
import { body, param, query } from "express-validator";
// import { validateRequest } from "../../../../middlewares/validateRequest";

const router = Router();
router.post(
  "/signin",
  [
    body("email")
      .isEmail()
      .notEmpty()
      .withMessage("Valid email field must be provided"),
    body("password")
      .isLength({ min: 6 })
      .notEmpty()
      .withMessage("Valid password field must be provided"),
  ],
  // validateRequest,
  signinAdminHandler
);

export { router as signinAdminRouter };
