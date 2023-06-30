import { client } from "../prisma/client";
import { hash } from "bcryptjs";
import createHttpError from 'create-http-error';


interface IUser{
    name:     string;
    password: string;
    username: string;
}

class UsersService{
  async create({name,username,password}:IUser){
    // Verificar se usuário existe
    const user = await client.user.findFirst({
      where:{
        username
      }
    });
    
    if(user){
      throw createHttpError(409, "User already exists!");
    }    
    //Cadastra usuário
    const passwordHash = await hash(password,8)
    return await client.user.create({
      data:{
        name,
        username,
        password: passwordHash,
      }
    })
  }
    
}

export{ UsersService }