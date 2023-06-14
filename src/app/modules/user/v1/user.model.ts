import { Schema, model } from 'mongoose'
import { iUser, iUserModel } from './user.interface'

const userSchema = new Schema<iUser, iUserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const User = model<iUser, iUserModel>('User', userSchema)
