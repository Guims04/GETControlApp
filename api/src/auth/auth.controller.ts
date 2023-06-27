import { Request, Response, request } from "express";
import { AuthService } from "./auth.service";


class AuthController{
  async createUser(req: Request, res: Response ){
    const { username, name, password } = req.body;
    const auth = new AuthService;
    const user = await auth.create({
      username, name, password,
    });
    return res.json(user);
  }
}

export { AuthController }