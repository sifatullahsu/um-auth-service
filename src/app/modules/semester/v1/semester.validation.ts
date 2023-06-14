import { z } from 'zod'
import { semesterCode, semesterMonth, semesterTitle } from './semester.constant'

export const semesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...semesterTitle] as [string, ...string[]], {
      required_error: 'Title is required.'
    }),
    year: z.number({
      required_error: 'Year is required.'
    }),
    code: z.enum([...semesterCode] as [string, ...string[]]),
    startMonth: z.enum([...semesterMonth] as [string, ...string[]], {
      required_error: 'Start month is needed'
    }),
    endMonth: z.enum([...semesterMonth] as [string, ...string[]], {
      required_error: 'End month is needed'
    })
  })
})
