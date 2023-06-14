import express from 'express'
import semesterRouteV1 from '../modules/semester/v1/semester.route'
import userRouteV1 from '../modules/user/v1/user.route'

const AppRouter = express.Router()

AppRouter.use('/api/v1/users/', userRouteV1)
AppRouter.use('/api/v1/semesters/', semesterRouteV1)

export default AppRouter
