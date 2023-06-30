import { Router } from 'express';
import { router as userRouter } from './users/users.routes';

const router = Router();

router.use('/user', userRouter);

export { router }