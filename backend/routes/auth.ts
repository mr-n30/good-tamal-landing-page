import { Router, Request, Response } from 'express'
import User from '../models/User'

const router = Router()
const validator = require('email-validator')

interface RegisterRequestBody {
    email: string
    password: string
    firstName?: string
    lastName?: string
    dob?: string
}

interface LoginRequestBody {
    email: string
    password: string
}

router.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password }: LoginRequestBody = req.body

        if (!email || !password) {
            return res.status(400).send({ "message": "missing required params!" })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).send({ "message": "user not found!" })
        }

        if (user.password !== password) {
            return res.status(401).send( { message: "Invalid username or password!" })
        }

        return res.status(200).send(user)
    }

    catch (e: any) {
        return res.status(500).send({ "message": "Missing required params!" })
    }
})

router.post("/register", async (req: Request, res: Response) => {
    try {
        const user: RegisterRequestBody = req.body

        if (!validator.validate(user.email)) {
            return res.status(400).send({message: "Invalid email format!"})
        }

        if (!user.email || !user.password) {
            return res.status(400).send({ message: "missing required params!" })
        }

        const userExists = await User.findOne({ email: user.email })
        if (userExists) {
            return res.status(400).send({ message: "User already exists!" })
        }

        // TODO:
        // and hash password
        // and validate password strength
        const createdUser = await User.create(user)

        return res.status(200).send(createdUser)
    }

    catch (e: any) {
        return res.status(500).send({ "message": e.message })
    }
})

router.get("/users", async (req: Request, res: Response) => {
    try {
        const users = await User.find()
        return res.status(200).send(users)
    }

    catch (e: any) {
        return res.status(500).send({ "message": e.message })
    }
})

export default router