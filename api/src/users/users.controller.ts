import { Request, Response, request } from "express";
import { UsersService } from "./users.service";


class UsersController{
  async createUser(req: Request, res: Response ){
    const { username, name, password } = req.body;
    const auth = new UsersService;
    const user = await auth.create({
      username, name, password,
    });
    return res.json(user);
  }
}

export { UsersController }