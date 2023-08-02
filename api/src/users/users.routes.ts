import { Router } from "express";
import { UsersController } from "./users.controller";

const router = Router();
const asyncHandler = require("express-async-handler");

// Instances
const users = new UsersController();

// Routes
router
  .route("/")
  .post(asyncHandler(users.createUser))
  .get(asyncHandler(users.getAllUsers));

router
  .route("/:userId(\\d+)")
  .get(asyncHandler(users.getOneUser))
  .put(asyncHandler(users.updateUser))
  .delete(asyncHandler(users.deleteUser));

export { router };
