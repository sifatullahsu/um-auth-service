import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import config from '../config'
const { combine, timestamp, printf } = format

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}] ${message}`
})

const customTransports = (name: string) => {
  return config.env === 'production'
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

const handleInfoLogger = createLogger({
  level: 'info',
  format: combine(timestamp(), customFormat),
  transports: customTransports('info')
})

const handleErrorLogger = createLogger({
  level: 'error',
  format: combine(timestamp(), customFormat),
  transports: customTransports('error')
})

export const infoLogger = handleInfoLogger.info
export const errorLogger = handleErrorLogger.error
