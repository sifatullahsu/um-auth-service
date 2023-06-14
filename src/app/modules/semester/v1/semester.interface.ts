import { Model } from 'mongoose'

export type iSemesterTitle = 'Autumn' | 'Summer' | 'Fall'

export type iSemesterCode = '01' | '02' | '03'

export type iSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type iSemester = {
  title: iSemesterTitle
  year: number
  code: iSemesterCode
  startMonth: iSemesterMonth
  endMonth: iSemesterMonth
}

export type iSemesterModel = Model<iSemester>
