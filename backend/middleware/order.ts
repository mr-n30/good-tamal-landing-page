import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import JWTHelper from '../util/auth'

const orderMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const jwtHelper = new JWTHelper()
    const tokenDecoded = await jwtHelper.verifyToken(req.cookies.refresh_token)

    if (typeof tokenDecoded === 'string') {
        return res.status(401).json({ message: 'Invalid token.' })
    }

    // Verify user roles
    const user = await User.findOne({ _id: tokenDecoded.user_id })
    switch (tokenDecoded.user_role) {
        case 'admin':
        case 'employee':
        case 'customer':
            next()
            break
        default:
            return res.status(401).json({ message: 'You must be logged in to place an order.' })
    }
}

export default orderMiddleware