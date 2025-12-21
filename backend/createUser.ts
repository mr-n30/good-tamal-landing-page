import mongoose from "mongoose";
import dotenv from 'dotenv'
import User, { IUser } from './models/User'

dotenv.config()

const createUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        await User.insertOne({
            username: 'admin',
            firstName: 'John',
            lastName: 'Wick',
            email: 'admin@goodtamal.htb',
            password: 'Boxing14.',
            user_role: 'admin'
        })
        await mongoose.disconnect()
    }

    catch (e) {
        console.error(e)
    }
}

createUser()