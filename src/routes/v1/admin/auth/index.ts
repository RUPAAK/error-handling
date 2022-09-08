import { Router } from "express";
import { getProfileRouter } from "./profile";
import { signinAdminRouter } from "./signin";

const router = Router();

router.use(signinAdminRouter);
router.use(getProfileRouter);

export { router as indexAdminAuthRouter };
