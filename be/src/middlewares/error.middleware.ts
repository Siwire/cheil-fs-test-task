import { Response, Request, NextFunction } from "express";
import { AppError } from "../shared/types/common";
import { validationResult } from "express-validator";

export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(`[ERROR] ${req.method} ${req.url} : ${err.message}`);

  const statusCode = err.status || 500;


  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = errors.array().map((err: { msg: string }) => err.msg).join(", ");
  
  const error: AppError = new Error(extractedErrors);
  error.status = 400;
  
  return next(error);
};