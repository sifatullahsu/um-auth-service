import z from 'zod'

export const userZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required.'
    }),
    password: z.string().optional()
  })
})
