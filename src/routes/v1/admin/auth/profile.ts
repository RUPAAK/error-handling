import { Router } from "express";
import { signinAdminHandler } from "../../../../controllers/v1/admin/auth/signin";
import { body, param, query } from "express-validator";
import { validateRequest } from "../../../../middlewares/validateRequest";
import { getProfileHandler } from "../../../../controllers/v1/admin/auth/profile";
import { validateToken } from "../../../../middlewares/current-user";
import { validateUser } from "../../../../middlewares/valudate-user";
import { validateRole } from "../../../../middlewares/role-validation";
import { Role } from "../../../../common/types/role";

const router = Router();

router.get(
  "/secret",
  validateToken,
  validateUser,
  validateRole([Role.admin, Role.user]),
  validateRequest,
  getProfileHandler
);

export { router as getProfileRouter };
