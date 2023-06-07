import mongoose from 'mongoose'
import app from './app'

async function main() {
  try {
    // database connection
    await mongoose.connect(process.env.DB_URL as string)
    console.log(`🛢 Database is connected successfully`)

    // app listen
    const port = process.env.PORT || 5000
    app.listen(port, () => console.log(`🛢 application running port ${port}`))
  } catch (err) {
    console.log('Failed to connect database', err)
  }
}

main()
