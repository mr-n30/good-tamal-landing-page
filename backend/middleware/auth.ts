import jwt, { JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { UserRole } from '../models/User'
import JWTHelper from '../util/auth'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const refresh_token = req.cookies['refresh_token']

        if (typeof refresh_token !== 'string') return res.status(401).send({ message: 'Invalid token!' })

        const payload: JwtPayload | string = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET!)

        if (typeof payload === 'string') {
            return res.status(401).send({ message: 'Unauthorized: ' + payload })
        }

        // Check user role from payload
        switch (payload.role) {
            case UserRole.ADMIN:
            case UserRole.EMPLOYEE:
            case UserRole.CUSTOMER:
                next()
                break
            default:
                return res.status(403).send({ message: 'Forbidden: Insufficient role permissions' })
        }

        return res.status(400).send({ message: 'Error in authMiddleware?' })
    }

    catch (e) {
        res.status(401).send({ message: 'Unauthorized: Missing cookie error: ' + e })
    }

}

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwt = req.cookies.refresh_token

        if (typeof jwt !== 'string') return res.status(401).json({ message: 'Missing token', jwt })

        const jwtHelper = new JWTHelper()
        const payload: JwtPayload | string = await jwtHelper.verifyToken(jwt)

        if (typeof payload === 'string') return res.status(400).json({ message: 'Error decoding!' })
        if (payload.user_role === 'admin') next()
        else return res.status(403).json({ message: 'Forbidden: Admins only!' })
    }
    catch (e) {
        return res.status(401).send({ message: 'Unauthorized: ' + e })
    }
}