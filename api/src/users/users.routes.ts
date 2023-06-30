import { Router } from "express";
import { UsersController } from "./users.controller";

const router = Router();
const asyncHandler = require('express-async-handler');
const users = new UsersController();

router.route('/').post(asyncHandler(users.createUser));

export { router };