import express from 'express'
import validateZod from '../../../middlewares/validateZod'
import { createUser, createUserLegacy } from './user.controller'
import { userZodSchema } from './user.validation'

const router = express.Router()

router.post('/create-user', validateZod(userZodSchema), createUser)
router.post('/create-user-legacy', createUserLegacy)

export default router
