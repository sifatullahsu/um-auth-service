import mongoose from 'mongoose'
import { ZodError, ZodIssue } from 'zod'

export type iErrorMessages = {
  path: string | number
  message: string
}

export type iErrorResponse = {
  status: number
  message: string
  errorMessages: iErrorMessages[]
}

export type iValidationError = mongoose.Error.ValidationError
export type iCastError = mongoose.Error.CastError
export type iValidatorError = mongoose.Error.ValidatorError
export type iMongooseIssue = iValidatorError | iCastError

export type iZodError = ZodError
export type iZodIssue = ZodIssue
