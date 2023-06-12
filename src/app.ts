import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application, NextFunction, Request, Response } from 'express'
import errorHandler from './app/middlewares/errorHandler'

const app: Application = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error('hi')
  } catch (error) {
    next(error)
  }
})

app.use(errorHandler)

export default app
