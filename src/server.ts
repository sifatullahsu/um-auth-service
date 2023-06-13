import mongoose from 'mongoose'
import app from './app'
import { errorLogger, logger } from './shared/logger'

// process.on('uncaughtException', error => {
//   errorlogger.error(error);
//   process.exit(1);
// });

// let server: Server;

async function main() {
  try {
    // database connection
    await mongoose.connect(process.env.DB_URL as string)
    logger.info(`🛢 Database is connected successfully`)

    // app listen
    const port = process.env.PORT || 5000
    app.listen(port, () => logger.info(`🛢 application running port ${port}`))
  } catch (err) {
    errorLogger.error('Failed to connect database', err)
  }

  // process.on('unhandledRejection', error => {
  //   if (server) {
  //     server.close(() => {
  //       errorlogger.error(error)
  //       process.exit(1)
  //     })
  //   } else {
  //     process.exit(1)
  //   }
  // })
}

main()

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received')
//   if (server) {
//     server.close()
//   }
// })
