import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../../shared/catchAsync'
import { createUserDB } from './user.service'

export const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body
    const result = await createUserDB(data)

    res.status(200).json({
      success: true,
      message: 'User created successfully.',
      data: result
    })
  }
)

// legacy
export const createUserLegacy: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body
    const result = await createUserDB(data)

    res.status(200).json({
      success: true,
      message: 'User created successfully.',
      data: result
    })
  } catch (error) {
    next(error)
  }
}
