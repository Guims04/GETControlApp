import { Response, Request, NextFunction } from "express";
import createHttpError from "http-errors";
import { client } from "../prisma/client";
import httpStatus from "http-status";
import { compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { jwtSecret } from "../api.config";
import moment from "moment";

// Interfaces
interface IAuth {
  username: string;
  password: string;
}

interface Itoken {
  userId: number;
  refreshToken: string;
}

// Class
class AuthService {
  // generate token
  generateToken(data: Itoken) {
    return sign(
      {
        subject: data,
      },
      jwtSecret,
      { expiresIn: "10m" }
    );
  }

  // Authenticate User
  async authenticate({ username, password }: IAuth) {
    // check if user exists
    const user = await client.user.findFirst({
      where: {
        username,
      },
    });

    if (!user)
      throw createHttpError(
        httpStatus.BAD_REQUEST,
        "User or password incorrect!"
      );

    // check password
    const passMatch = await compare(password, user.password);

    if (!passMatch)
      throw createHttpError(
        httpStatus.BAD_REQUEST,
        "User or password incorrect!"
      );

    // create refresh token
    const refreshToken = await this.createRefreshToken(user.id);

    // genarete user token
    const token = this.generateToken({
      userId: user.id,
      refreshToken: refreshToken.id,
    });

    return { token };
  }

  // validate token
  validateToken(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken)
      throw createHttpError(httpStatus.BAD_REQUEST, "Token is missing");
    // split Bearer to get token
    const [, token] = authToken.split(" ");
    try {
      verify(token, jwtSecret);
      return next();
    } catch (error) {
      throw createHttpError(httpStatus.BAD_REQUEST, error);
    }
  }

  // create refresh token in table
  async createRefreshToken(userId: number) {
    // generate a moment expires
    const expiresIn = moment().add(20, "minutes").unix();

    // check if refreshToken for user already existis to destroy
    const checkRefreshToken = await client.refreshToken.findFirst({
      where: { userId },
    });
    if (checkRefreshToken)
      await client.refreshToken.delete({ where: { userId } });

    // create refresh token
    const refresh_token = await client.refreshToken.create({
      data: { userId, expiresIn },
    });

    return refresh_token;
  }

  // Renew token
  async renewToken(refresh_token: string) {
    // check if refresh token exists where refresh id
    const refreshToken = await client.refreshToken.findFirst({
      where: { id: refresh_token },
    });
    if (!refreshToken)
      throw createHttpError(httpStatus.BAD_REQUEST, "Invalid refresh token");

    // verify expiration
    const isExpired = moment().isAfter(moment.unix(refreshToken.expiresIn));
    if (isExpired)
      throw createHttpError(httpStatus.UNAUTHORIZED, "Time limit exceeded!");

    const token = this.generateToken({
      userId: refreshToken.userId,
      refreshToken: refreshToken.id,
    });

    return { token };
  }
}

export { AuthService };
