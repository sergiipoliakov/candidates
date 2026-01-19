import { NextFunction, Request, Response } from 'express';
import { ValidationError as SequelizeValidationError, UniqueConstraintError } from 'sequelize';
import ApiError from "../exceptions/api.error";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  if (err instanceof SequelizeValidationError) {
    const errors = err.errors.map(e => ({
      field: e.path,
      message: e.message
    }));
    return res.status(400).json({ message: 'Database validation error', errors });
  }

  if (err instanceof UniqueConstraintError) {
    const errors = err.errors.map(e => ({
      field: e.path,
      message: e.message
    }));
    return res.status(400).json({ message: 'Unique constraint error', errors });
  }

  return res.status(500).json({ message: 'Unexpected error' });
}
