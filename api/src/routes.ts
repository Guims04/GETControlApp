import { Router } from 'express';

const router = Router();

router.use('/user', require('./auth/auth.routes'));

export { router }