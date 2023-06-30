import { client } from "../prisma/client";
import { hash } from "bcryptjs";

interface IUser{
    name:     string;
    password: string;
    username: string;
}

class AuthService{
  async create({name,username,password}:IUser){
    // Verificar se usuário existe
    const user = await client.user.findFirst({
      where:{
        username
      }
    });
    
    if(user){
      throw new Error("User already exists!");
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

export{ AuthService }