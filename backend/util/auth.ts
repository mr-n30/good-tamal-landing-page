import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '../models/User'

class JWTHelper {
    // Takes in user ID and returns a signed JWT token
    async generateToken(userId: string): Promise<string> {
        const user = await User.findById(userId)
        const userRole = user!.user_role

        const token = jwt.sign(
            { user_id: userId, user_role: userRole },
            process.env.REFRESH_TOKEN_SECRET!,
            // { expiresIn: ''}
        )

        console.log("Generated token:", token)

        return token
    }

    // Takes in a JWT token and verifies it, returning the decoded payload
    async verifyToken(token: string): Promise<JwtPayload | string> {
        try {
            const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!)
            return decoded
        }

        catch (e) {
            console.error(e)
            return 'Error verifying token'
        }
    }
}

export default JWTHelper