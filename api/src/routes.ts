import { Router } from 'express';
import { router as userRouter } from './users/users.routes';
import { router as authRouter } from './auth/auth.routes'

const router = Router();

// Routes
router.use('/user', userRouter);
router.use('/login', authRouter);

export { router };