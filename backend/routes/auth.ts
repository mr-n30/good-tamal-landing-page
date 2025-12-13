import { Router, Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import validator from 'email-validator'
import zxcvbn from 'zxcvbn'
import generateTokens from "../util/auth"

const router = Router()

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

        // Find user by email
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send({ "message": "user not found!" })
        }

        // Check password
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            return res.status(401).send({message: "Invalid username or password!"})
        }

        const {accessToken, refreshToken} = generateTokens(user._id.toString())

        res.cookie('refresh_token', refreshToken, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false,
            httpOnly: true
        })

        return res.status(200).send({accessToken, user: {id: user._id, email: user.email}})
    }

    catch (e: any) {
        return res.status(500).send({ "message": "Missing required params!" })
    }
})

router.post("/register", async (req: Request, res: Response) => {
    try {
        const user: RegisterRequestBody = req.body

        if (!user.email || !user.password) {
            return res.status(400).send({ message: "missing required params!" })
        }

        // Validate email format
        if (!validator.validate(user.email)) {
            return res.status(400).send({message: "Invalid email format!"})
        }

        // Check if user already exists
        const userExists = await User.findOne({ email: user.email })
        if (userExists) {
            return res.status(400).send({ message: "User already exists!" })
        }

        // Validate password strength
        if (zxcvbn(user.password).score < 3) {
            return res.status(400).send({message: "Password is not strong enough!"})
        }

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

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("OK");
});


export default router
