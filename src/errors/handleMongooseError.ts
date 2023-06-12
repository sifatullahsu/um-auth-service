import {
  iErrorMessages,
  iErrorResponse,
  iMongooseIssue,
  iValidationError
} from './interface'

const handleMongooseError = (error: iValidationError): iErrorResponse => {
  const values = Object.values(error.errors)

  const errorMessages: iErrorMessages[] = values.map(
    (element: iMongooseIssue) => {
      return {
        path: element?.path,
        message: element?.message
      }
    }
  )

  return {
    status: 400,
    message: 'Validation Error',
    errorMessages
  }
}

export default handleMongooseError
