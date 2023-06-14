import { model, Schema } from 'mongoose'
import {
  iSemester,
  iSemesterCode,
  iSemesterModel,
  iSemesterMonth,
  iSemesterTitle
} from './semester.interface'

const semesterTitle: iSemesterTitle[] = ['Autumn', 'Summer', 'Fall']

const semesterCode: iSemesterCode[] = ['01', '02', '03']

const semesterMonth: iSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

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
