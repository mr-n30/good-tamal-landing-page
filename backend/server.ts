import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db'
import auth from "./routes/auth"

dotenv.config()

const app = express()
app.use(express.json())

app.use("/api/auth", auth)

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectDB()
    console.log(`[+] Server started on port: ${PORT}`)
})