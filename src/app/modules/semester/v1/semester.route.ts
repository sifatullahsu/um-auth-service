import express from 'express'
import { createSemester } from './semester.controller'

const semesterRouteV1 = express.Router()

semesterRouteV1.post('/create-semester', createSemester)

export default semesterRouteV1
