import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application } from 'express'
import errorHandler from './app/middlewares/errorHandler'
import AppRouter from './app/routers'

const app: Application = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', AppRouter)

app.use(errorHandler)

export default app
