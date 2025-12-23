import express, { Request, Response } from 'express'
import { adminMiddleware } from '../middleware/auth'

const router = express.Router()

router.get('/dashboard', adminMiddleware, (req: Request, res: Response) => {
    return res.json({ message: 'Welcome to the admin dashboard!' })
})

export default router