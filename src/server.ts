import mongoose from 'mongoose'
import app from './app'
import { errorLogger, logger } from './app/shared/logger'

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
}

main()
