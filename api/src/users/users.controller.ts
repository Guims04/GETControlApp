import { Request, Response, request } from "express";
import { UsersService } from "./users.service";

// instances
const usersService = new UsersService;

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