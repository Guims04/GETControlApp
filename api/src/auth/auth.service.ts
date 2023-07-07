import { Response, Request, NextFunction } from 'express';
import createHttpError from "http-errors";
import { client } from "../prisma/client";
import httpStatus from "http-status";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { jwtSecret } from '../api.config';

// Interfaces
interface IAuth{
  username: string;
  password: string;
}

// Class
class AuthService{
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
    const token = sign({      
      subject: user.id    
    },jwtSecret,{
      expiresIn: "20s"  
    });

    return {token};
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
}

export { AuthService };