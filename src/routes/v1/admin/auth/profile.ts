import { Router } from "express";
import { signinAdminHandler } from "../../../../controllers/v1/admin/auth/signin";
import { body, param, query } from "express-validator";
import { getProfileHandler } from "../../../../controllers/v1/admin/auth/profile";

import { Role } from "../../../../common/types/role";

const router = Router();

router.get(
  "/secret",
  // validateToken,
  // validateUser,
  // validateRole([Role.admin, Role.user]),
  // validateRequest,
  getProfileHandler
);

export { router as getProfileRouter };
