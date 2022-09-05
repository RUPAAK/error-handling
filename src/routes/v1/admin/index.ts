import { Router } from "express";
import { indexAdminAuthRouter } from "./auth";

const router = Router();

router.use("/api/v1/auth", indexAdminAuthRouter);

export { router as indexAdminRouter };
