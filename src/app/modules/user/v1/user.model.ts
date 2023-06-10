import { Model, Schema, model } from 'mongoose'
import { iUser } from './user.interface'

type UserModel = Model<iUser, object>

const userSchema = new Schema<iUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const User = model<iUser, UserModel>('User', userSchema)
