import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import config from '../../config'
import ApiError from '../../errors/ApiError'
import handleMongooseError from '../../errors/handleMongooseError'
import handleZodError from '../../errors/handleZodError'
import { iErrorMessages } from '../../errors/interface'
import { errorLogger } from '../../shared/logger'

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  errorLogger(error)

  let status = 500
  let message = 'Something went wrong !'
  let errorMessages: iErrorMessages[] = []

  if (error?.name === 'ValidationError') {
    const getError = handleMongooseError(error)
    status = getError.status
    message = getError.message
    errorMessages = getError.errorMessages
  } else if (error instanceof ZodError) {
    const getError = handleZodError(error)
    status = getError.status
    message = getError.message
    errorMessages = getError.errorMessages
  } else if (error instanceof ApiError) {
    status = error.status
    message = error.message
  } else if (error instanceof Error) {
    message = error.message
  }

  res.status(status).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : null
  })

  next()
}

export default errorHandler
