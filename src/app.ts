import cors from 'cors'
import dotenv from 'dotenv'
import express, { Application, Request, Response } from 'express'

const app: Application = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
