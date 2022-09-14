import { Router } from "express";
import { signinAdminHandler } from "../../../../controllers/v1/admin/auth/signin";
import { body, param, query } from "express-validator";
import { signupAdminHandler } from "../../../../controllers/v1/admin/auth/singup";
import { validateRequest } from "../../../../common/middlewares/validate-request";

const router = Router();
router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .notEmpty()
      .withMessage("Valid email must be provided"),
    body("name").notEmpty().withMessage("Valid name must be provided"),
    body("password").notEmpty().withMessage("Valid password must be provided"),
  ],
  validateRequest,
  signupAdminHandler
);

export { router as signupAdminRouter };
