import { Router } from "express";
import { AuthController } from "./auth.controller";


const router = Router();
const asyncHandler = require('express-async-handler');
const auth = new AuthController();

router.route('/').post(asyncHandler(auth.createUser));

export { router };