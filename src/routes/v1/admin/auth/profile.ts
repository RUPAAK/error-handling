import { Router } from "express";
import { signinAdminHandler } from "../../../../controllers/v1/admin/auth/signin";
import { body, param, query } from "express-validator";
import { getProfileHandler } from "../../../../controllers/v1/admin/auth/profile";

import { Role } from "../../../../common/types/role";
import { currentUser } from "../../../../common/middlewares/current-user";
import { restrictTo } from "../../../../common/middlewares/restrict-to";
import { requireAuth } from "../../../../common/middlewares/require-auth";

const router = Router();

router.get(
  "/profile",
  currentUser,
  requireAuth,
  restrictTo([Role.admin]),
  // validateToken,
  // validateUser,
  // validateRole([Role.admin, Role.user]),
  // validateRequest,
  getProfileHandler
);

export { router as getProfileRouter };
