import { Request, Response, request } from "express";
import { UsersService } from "./users.service";
import createHttpError from "http-errors";
import httpStatus from "http-status";

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

  //  update user
  async updateUser(req: Request, res: Response) {
    const { userId } = req.params;
    const { body } = req;

    const user = await usersService.update(parseInt(userId), body);

    return res.json(user);
  }

  // delete user
  async deleteUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;
  
      const user = await usersService.softDelete(parseInt(userId));
  
      return res.json(user);
    } catch(error) {
      throw createHttpError(httpStatus.BAD_REQUEST, error )
    }
  }
}

export { UsersController };
