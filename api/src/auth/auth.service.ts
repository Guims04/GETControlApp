import createHttpError from "http-errors";
import { client } from "../prisma/client";
import httpStatus from "http-status";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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
    },"129bfc26-507d-4929-b395-0b8fd9c13f4d",{
      expiresIn: "20s"  
    });
    
    return {token};
  }
}

export { AuthService };