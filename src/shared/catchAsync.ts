import { NextFunction, Request, Response } from 'express'

type AsyncType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>

const catchAsync = (fn: AsyncType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

export default catchAsync
