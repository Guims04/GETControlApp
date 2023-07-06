import { client } from "../prisma/client";
import { hash } from "bcryptjs";
import createHttpError from 'create-http-error';

// Interfaces
interface IUser{
    name:     string;
    password: string;
    username: string;
}

// Class
class UsersService{

  // Create user function
  async create({name,username,password}:IUser){
    // Check if user exists
    const user = await client.user.findFirst({
      where:{
        username
      }
    });
    
    if(user){
      throw createHttpError(409, "User already exists!");
    }    

    //Create user with cripted password
    const passwordHash = await hash(password,8)
    return await client.user.create({
      data:{
        name,
        username,
        password: passwordHash,
      }
    });
  }
    
}

export{ UsersService }