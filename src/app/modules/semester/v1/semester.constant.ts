import { iSemesterCode, iSemesterMonth, iSemesterTitle } from './semester.interface'

export const semesterTitle: iSemesterTitle[] = ['Autumn', 'Summer', 'Fall']

export const semesterCode: iSemesterCode[] = ['01', '02', '03']

export const semesterMonth: iSemesterMonth[] = [
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

export const semesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03'
}
