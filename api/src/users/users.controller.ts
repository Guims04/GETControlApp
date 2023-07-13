import { Request, Response, request } from "express";
import { UsersService } from "./users.service";

// Instances
const usersService = new UsersService();

// Class
class UsersController{

  // create user controller
  async createUser(req: Request, res: Response ){
    const { username, name, password } = req.body;

    const user = await usersService.create({
      username, name, password,
    });
    
    return res.json(user);
  }

}

export { UsersController }