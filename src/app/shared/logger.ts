import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, printf } = format

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [PH] ${level}: ${message}`
})

export const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'info.log'),
      level: 'info',
    }),
  ],
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})
