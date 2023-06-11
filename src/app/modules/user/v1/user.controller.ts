import { Request, Response } from 'express'
import { createUserDB } from './user.service'

export const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const result = await createUserDB(data)

    res.status(200).json({
      success: true,
      message: 'User created successfully.',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user.',
    })
  }
}
