import { iSemester } from './semester.interface'
import { Semester } from './semester.model'

export const createSemesterDB = async (data: iSemester): Promise<iSemester> => {
  const result = await Semester.create(data)

  return result
}
