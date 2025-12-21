import { Router, Request, Response } from 'express'
import User from '../models/User'
import validator from 'email-validator'
import zxcvbn from 'zxcvbn'
import JWTHelper from "../util/auth"
import { authMiddleware } from '../middleware/auth'

const router = Router()

interface RegisterRequestBody {
    email: string
    password: string
    firstName?: string
    lastName?: string
    dob?: string
    username: string
}

interface LoginRequestBody {
    username: string
    password: string
}

router.post("/login", async (req: Request, res: Response) => {
    try {
        const { username, password }: LoginRequestBody = req.body

        if (!username || !password) {
            return res.status(400).send({ "message": "missing required params!" })
        }

        // Find user by usernam
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(404).send({ "message": "user not found!" })
        }

        // Check password
        const valid = await user.comparePassword(password)

        if (!valid) {
            return res.status(401).send({ message: "Invalid username or password!" })
        }

        const jwtHelper = new JWTHelper()
        const refreshToken = await jwtHelper.generateToken(user._id.toString())
        console.log("Refresh token to set in cookie:", refreshToken)
        res.cookie('refresh_token', refreshToken, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: false,
            httpOnly: true
        })

        return res.status(200).send({ user: {id: user._id, username: user.username} })
    }

    catch (e: any) {
        return res.status(500).send({ "message": "Missing required params!" })
    }
})

router.post("/register", async (req: Request, res: Response) => {
    try {
        const user: RegisterRequestBody = req.body

        if (!user.email || !user.password || !user.username) {
            return res.status(400).send({ message: "Missing required params!" })
        }

        // Validate email format
        if (!validator.validate(user.email)) {
            return res.status(400).send({ message: "Invalid email format!" })
        }

        // Check if user already exists
        let emailExists = await User.findOne({ email: user.email })
        if (emailExists) return res.status(400).send({ message: "User already exists!" })

        // Check if username is taken
        let usernameExists = await User.findOne({ username: user.username })
        if (usernameExists) return res.status(400).send({ message: "Username already taken!" })

        // Validate password strength
        if (zxcvbn(user.password).score < 3) {
            return res.status(400).send({ message: "Password is not strong enough!" })
        }

        const createdUser = await User.insertOne({
            email: user.email,
            username: user.username,
            password: user.password,
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            dob: user.dob ? new Date(user.dob) : "",
            user_role: "user",
        })

        return res.status(200).send(createdUser)
    }

    catch (e: any) {
        return res.status(500).send({ "message": e.message })
    }
})

export default router