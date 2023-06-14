import express from 'express'
import validateZod from '../../../middlewares/validateZod'
import { createUser, createUserLegacy } from './user.controller'
import { userZodSchema } from './user.validation'

const userRouteV1 = express.Router()

userRouteV1.post('/create-user', validateZod(userZodSchema), createUser)
userRouteV1.post('/create-user-legacy', createUserLegacy)

export default userRouteV1
