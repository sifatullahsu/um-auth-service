import { model, Schema } from 'mongoose'
import { semesterCode, semesterMonth, semesterTitle } from './semester.constant'
import { iSemester, iSemesterModel } from './semester.interface'

const semesterSchema = new Schema<iSemester, iSemesterModel>({
  title: {
    type: String,
    required: true,
    enum: semesterTitle
  },
  year: {
    type: Number,
    required: true
  },
  code: {
    type: String,
    required: true,
    enum: semesterCode
  },
  startMonth: {
    type: String,
    required: true,
    enum: semesterMonth
  },
  endMonth: {
    type: String,
    required: true,
    enum: semesterMonth
  }
})

export const Semester = model<iSemester, iSemesterModel>('Semester', semesterSchema)
