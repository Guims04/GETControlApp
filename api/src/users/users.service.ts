import { client } from "../prisma/client";
import { hash } from "bcryptjs";
import createHttpError from "create-http-error";
import httpStatus from "http-status";

// Interfaces
interface IUser {
  name: string;
  password: string;
  username: string;
}

// Class
class UsersService {
  // Create user function
  async create({ name, username, password }: IUser) {
    // Check if user exists
    const user = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (user) {
      throw createHttpError(httpStatus.CONFLICT, "User already exists!");
    }

    //Create user with cripted password
    const passwordHash = await hash(password, 8);
    return await client.user.create({
      data: {
        name,
        username,
        password: passwordHash,
      },
    });
  }

  // Get One User
  async getById(userId: number) {
    const user = await client.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) throw createHttpError(httpStatus.NOT_FOUND, "User not found!");

    return user;
  }
}

export { UsersService };
