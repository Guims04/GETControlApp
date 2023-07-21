import "express-async-errors";
import express, { NextFunction, Request, Response } from 'express';
import moment from 'moment';

const HttpStatus = require('http-status');

interface CustomError extends Error {
  statusCode?: number;
  status?: number;
}

const getInstance = (req: Request) => {
  // const token = UsersService.getToken(req);

  let instance = {
    method: req.method,
    url: req.url,
    body: req.body,
    // ...UsersServices.getUser(token),
    // startAt: req._startTime,
    endAt: moment().toISOString(),
    headers: req.headers
  }
}

const getErrorObject = (error: CustomError, req: Request) => {
  const statusCode = error.status || error.statusCode || 500;

  return {
    statusCode,
    statusText: HttpStatus[statusCode],
    name: error.name,
    message: error.message,
    instance: getInstance(req),
    stack: error.stack,
  };
}

export const errorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) return next(error);

  const obj = getErrorObject(error, req);

  console.error(error);

  return res.status(obj.statusCode).json(obj);
}
