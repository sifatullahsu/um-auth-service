import { Response } from 'express'

type iApiReponse = {
  status: number
  success: boolean
  message?: string
  data?: object | null
  id?: string
  ids?: string
}

const apiResponse = (res: Response, data: iApiReponse): void => {
  const responseData = {
    success: data.success,
    message: data?.message,
    data: data?.data,
    id: data?.id,
    ids: data?.ids
  }

  res.status(data.status).json(responseData)
}

export default apiResponse
