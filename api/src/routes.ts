import { Router } from 'express';
import { router as authRouter } from './auth/auth.routes';

const router = Router();

router.use('/user', authRouter);

export { router }