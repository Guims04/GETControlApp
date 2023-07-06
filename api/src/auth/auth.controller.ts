import { Request, Response } from 'express';
import { AuthService } from "./auth.service";

// Instances
const authService = new AuthService();

// Class
class AuthController{

  async login(req: Request, res: Response){
    const { username, password } = req.body;

    const token = await authService.authenticate({
      username,
      password
    })
    return res.json(token);
  }
}

export { AuthController };