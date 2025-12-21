import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db'
import auth from "./routes/auth"
import menu from "./routes/menu"
import dashboard from './routes/dashboard'
import cookieParse from 'cookie-parser'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParse())
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:1337'],
    credentials: true,
}))
app.use("/api/auth", auth)
app.use("/api/menu", menu)
app.use('/api/admin', dashboard)

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectDB()
    console.log(`[+] Server started on port: ${PORT}`)
})