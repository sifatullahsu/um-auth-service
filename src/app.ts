import cors from 'cors'
import express, { Application } from 'express'
import errorHandler from './app/middlewares/errorHandler'
import AppRouter from './app/routers'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', AppRouter)

app.use(errorHandler)

export default app
