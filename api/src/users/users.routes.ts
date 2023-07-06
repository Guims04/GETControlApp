import { Router } from "express";
import { UsersController } from "./users.controller";

const router = Router();
const asyncHandler = require('express-async-handler');

// Instances
const users = new UsersController();

// Routes
router.route('/').post(asyncHandler(users.createUser));

export { router };