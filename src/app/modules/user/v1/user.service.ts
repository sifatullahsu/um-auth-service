import { iUser } from './user.interface'
import { User } from './user.model'
import { generateID } from './user.util'

export const createUserDB = async (data: iUser): Promise<iUser | null> => {
  data.id = await generateID()

  if (!data.password) {
    data.password = process.env.DEFAULT_USER_PASS as string
  }

  const result = await User.create(data)

  return result
}
