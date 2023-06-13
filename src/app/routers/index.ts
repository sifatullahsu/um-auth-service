import express from 'express'
import userRouteV1 from '../modules/user/v1/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users/', userRouteV1)

export default AppRouter
