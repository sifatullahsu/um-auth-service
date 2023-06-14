import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../../shared/apiResponse'
import catchAsync from '../../../../shared/catchAsync'
import { createSemesterDB } from './semester.service'

export const createSemester: RequestHandler = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await createSemesterDB(data)

  apiResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Semester created successfully.',
    data: result
  })
})
