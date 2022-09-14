import { Router } from "express";
import { getProfileRouter } from "./profile";
import { signinAdminRouter } from "./signin";
import { signupAdminRouter } from "./signup";

const router = Router();

router.use(signinAdminRouter);
router.use(signupAdminRouter);

router.use(getProfileRouter);

export { router as indexAdminAuthRouter };
