import express from 'express'
import validateZod from '../../../middlewares/validateZod'
import { createSemester } from './semester.controller'
import { semesterZodSchema } from './semester.validation'

const semesterRouteV1 = express.Router()

semesterRouteV1.post('/create-semester', validateZod(semesterZodSchema), createSemester)

export default semesterRouteV1
