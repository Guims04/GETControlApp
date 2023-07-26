import { Request, Response, request } from "express";
import { UsersService } from "./users.service";

// Instances
const usersService = new UsersService();

// Class
class UsersController {
  // create user controller
  async createUser(req: Request, res: Response) {
    const { username, name, password } = req.body;

    const user = await usersService.create({
      username,
      name,
      password,
    });

    return res.json(user);
  }

  // get one user
  async getOneUser(req: Request, res: Response) {
    const { userId } = req.params;

    const user = await usersService.getById(parseInt(userId));

    return res.json(user);
  }

  // get all users
  async getAllUsers(req: Request, res: Response) {
    const users = await usersService.getAll();

    return res.json(users);
  }

  //
}

export { UsersController };
