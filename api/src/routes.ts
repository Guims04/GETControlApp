import { Router } from "express";
import { router as userRouter } from "./users/users.routes";
import { router as authRouter } from "./auth/auth.routes";
import { AuthService } from "./auth/auth.service";
import { AuthController } from "./auth/auth.controller";

// instances
const router = Router();
const authService = new AuthService();
const authController = new AuthController();

// Routes
router.use("/login", authRouter);
router.use(authService.validateToken);
router.use("/renew-token", authController.renewToken);
router.use("/users", userRouter);

export { router };
