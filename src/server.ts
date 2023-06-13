import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, infoLogger } from './shared/logger'

// process.on('uncaughtException', error => {
//   errorlogger.error(error);
//   process.exit(1);
// });

// let server: Server

async function main() {
  try {
    // database connection
    await mongoose.connect(config.database_url as string)
    infoLogger(`🛢 Database is connected successfully`)

    // app listen
    const port = config.port || 5000
    app.listen(port, () => infoLogger(`🛢 application running port ${port}`))
  } catch (err) {
    errorLogger('Failed to connect database', err)
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
