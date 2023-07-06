import { Router } from 'express';
import { AuthController } from './auth.controller';

const router = Router();
const asyncHandler = require('express-async-handler');

// Instances
const auth = new AuthController();

// Routes
router.route('/').post(asyncHandler(auth.login));

export { router };

