import httpStatus from 'http-status'
import { model, Schema } from 'mongoose'
import ApiError from '../../../../errors/ApiError'
import {
  semesterCode,
  semesterMonth,
  semesterTitle,
  semesterTitleCodeMapper
} from './semester.constant'
import { iSemester, iSemesterModel } from './semester.interface'

const semesterSchema = new Schema<iSemester, iSemesterModel>(
  {
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
  },
  {
    timestamps: true
  }
)

semesterSchema.pre('save', async function (next) {
  const query = { $and: [{ title: this.title }, { year: this.year }] }
  const isExist = await Semester.findOne(query)

  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, 'Semester is Already Exist!')
  }

  if (semesterTitleCodeMapper[this.title] !== this.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code')
  }

  next()
})

export const Semester = model<iSemester, iSemesterModel>('Semester', semesterSchema)
