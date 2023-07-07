import { Router } from 'express';
import { router as userRouter } from './users/users.routes';
import { router as authRouter } from './auth/auth.routes'
import { AuthService } from './auth/auth.service';

// instances
const router = Router();
const authService = new AuthService();

// Routes 
router.use('/login', authRouter);
router.use(authService.validateToken);
router.use('/user', userRouter);

export { router };