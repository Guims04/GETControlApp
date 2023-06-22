import { client } from "../prisma/client";

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
    // Caso não, Cadastra usuário
    return await client.user.create({
      data:{
        name,
        username,
        password
      }
    })
  }
    
}

export{ AuthService }