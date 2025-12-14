import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db'
import auth from "./routes/auth"
import menu from "./routes/menu"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/auth", auth)
app.use("/api/menu", menu)

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectDB()
    console.log(`[+] Server started on port: ${PORT}`)
})