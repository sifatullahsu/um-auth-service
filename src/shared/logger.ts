import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { combine, timestamp, printf } = format

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [PH] ${level}: ${message}`
})

const customTransports = (name: string) => {
  return process.env.NODE_ENV === 'production'
    ? [
        new DailyRotateFile({
          filename: path.join(
            process.cwd(),
            'logs',
            name,
            `${name}-%DATE%.log`
          ),
          datePattern: 'YYYY-MM-DD-HH',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d'
        })
      ]
    : [new transports.Console()]
}

export const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), customFormat),
  transports: customTransports('info')
})

export const errorLogger = createLogger({
  level: 'error',
  format: combine(timestamp(), customFormat),
  transports: customTransports('error')
})
