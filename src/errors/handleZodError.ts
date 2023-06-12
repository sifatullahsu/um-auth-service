import {
  iErrorMessages,
  iErrorResponse,
  iZodError,
  iZodIssue
} from './interface'

const handleZodError = (error: iZodError): iErrorResponse => {
  const values = error.issues

  const errorMessages: iErrorMessages[] = values.map((issue: iZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message
    }
  })

  return {
    status: 400,
    message: 'Validation Error',
    errorMessages
  }
}

export default handleZodError
