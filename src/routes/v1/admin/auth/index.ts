import { Router } from "express";
import { signinAdminRouter } from "./signin";

const router = Router();

router.use(signinAdminRouter);

export { router as indexAdminAuthRouter };
