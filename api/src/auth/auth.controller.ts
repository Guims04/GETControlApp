import { Request, Response } from 'express';
import { AuthService } from "./auth.service";

// Instances
const authService = new AuthService();

// Class
class AuthController{

  // Authenticate user
  async login(req: Request, res: Response){
    const { username, password } = req.body;

    const access = await authService.authenticate({
      username,
      password
    })

    return res.json(access);
  }

  // Renew token
  async renewToken(req: Request, res: Response){
    const { refreshToken } = req.body

    const token = await authService.renewToken(refreshToken)

    return res.json(token);
  }

}

export { AuthController };