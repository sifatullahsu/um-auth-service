import express from 'express'
import { createUser, createUserLegacy } from './user.controller'

const router = express.Router()

router.post('/create-user', createUser)
router.post('/create-user-legacy', createUserLegacy)

export default router
