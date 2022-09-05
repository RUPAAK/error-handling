import { Router } from "express";
import { signinAdminHandler } from "../../../../controllers/v1/admin/auth/signin";

const router = Router();

router.post("/signin", signinAdminHandler);

export { router as signinAdminRouter };
