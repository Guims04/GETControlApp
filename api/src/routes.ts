import { Router } from 'express';
import { router as authRouter } from './users/users.routes';

const router = Router();

router.use('/user', authRouter);

export { router }