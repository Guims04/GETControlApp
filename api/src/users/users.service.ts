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

  // Get one user
  async getById(userId: number) {
    const user = await client.user.findUnique({
      where: {
        id: userId,
        deletedAt: null,
      },
    });

    if (!user) throw createHttpError(httpStatus.NOT_FOUND, "User not found!");

    return user;
  }

  // Get all users
  async getAll() {
    const users = await client.user.findMany({ where: { deletedAt: null } });

    if (!users) throw createHttpError(httpStatus.NOT_FOUND, "Users not found!");

    return users;
  }

  // update user
  async update(userId: number, body: IUser) {
    await this.getById(userId);

    if (body.password) body.password = await hash(body.password, 8);

    const user = await client.user.update({
      where: { id: userId },
      data: body,
    });

    if (!user)
      throw createHttpError(
        httpStatus.BAD_REQUEST,
        "An error occurred while trying to update the user."
      );

    return user;
  }

  // Delete user
  async delete(userId) {
    await this.getById(userId);

    const user = await client.user.delete({ where: { id: userId } });

    if (!user)
      throw createHttpError(
        httpStatus.BAD_REQUEST,
        "An error occurred while trying to delete the user."
      );

    return user;
  }

  // Soft delete user
  async softDelete(userId) {
    await this.getById(userId);

    const deletedUser = await client.user.update({
      where: { id: userId },
      data: { deletedAt: new Date() },
    });

    if (!deletedUser)
      throw createHttpError(
        httpStatus.BAD_REQUEST,
        "An error occurred while trying to delete the user."
      );

    return deletedUser;
  }
}

export { UsersService };
