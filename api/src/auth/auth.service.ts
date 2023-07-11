import { Response, Request, NextFunction } from 'express';
import createHttpError from "http-errors";
import { client } from "../prisma/client";
import httpStatus from "http-status";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { jwtSecret } from '../api.config';
import moment from 'moment';

// Interfaces
interface IAuth{
  username: string;
  password: string;
}

interface Itoken{
  userId: number;
}

// Class
class AuthService{

  // generate token
  generateToken(data: Itoken){
    return sign({ 
      subject: data
    },jwtSecret,{ expiresIn: "20s" });
  }

  // Authenticate User
  async authenticate({ username, password }: IAuth){
    
    // check if user exists
    const user = await client.user.findFirst({
      where:{
        username,
      }, 
    });

    if(!user) throw createHttpError(httpStatus.BAD_REQUEST, "User or password incorrect!");

    // check password
    const passMatch = await compare(password, user.password);

    if(!passMatch) throw createHttpError(httpStatus.BAD_REQUEST, "User or password incorrect!");

    // genarete user token
    const token = this.generateToken({ userId: user.id });
    
    // create refresh token
    const refreshToken = await this.createRefreshToken(user.id);

    return { token, refreshToken };
  }

  // validate token
  validateToken(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken) throw createHttpError(httpStatus.BAD_REQUEST,"Token is missing");
    // split Bearer to get token
    const [,token] = authToken.split(" ");
    try {
      verify(token,jwtSecret);
      return next();
    } catch (error) {
      throw createHttpError(httpStatus.BAD_REQUEST, error);
    }

  }

  // create refresh token in table
  async createRefreshToken(userId: number){
    // generate a moment expires
    const expiresIn = moment().add(15, 'minutes').unix();

    console.log(userId);
    console.log(expiresIn);
    // create refresh token
    const refresh_token = await client.refreshToken.create({
      data: { userId, expiresIn }
    })
    console.log(refresh_token);

    return refresh_token;
  }

  // Renew token
  async renewToken(refresh_token: string){

    const refreshToken = await client.refreshToken.findFirst({
      where: { id: refresh_token }
    })

    if (!refreshToken) throw createHttpError(httpStatus.BAD_REQUEST, "Invalid refresh token");

    const token = this.generateToken({ userId: refreshToken.userId });

    return { token }
  }

}

export { AuthService };