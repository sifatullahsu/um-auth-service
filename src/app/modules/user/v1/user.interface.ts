import { Model } from 'mongoose'

export type iUser = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<iUser>
