import { Request, Response, NextFunction } from "express";
import  jwt, { JwtPayload } from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.headers.authorization
        if (!header) {
            return res.status(401).send({"message": "Unauthorized!"})
        }

        const token = header.split(" ")[1]

        if (!token) {
            return res.status(401).send({"message": "Missing header"})
        }

        const payload: JwtPayload | string = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!)

        if (typeof payload === "string") {
            return res.status(401).send({"message": "Unauthorized!"})
        }

        (req as any).user = payload.sub

        next()
    }

    catch(e) {
        return res.status(401).send({"message": "Unauthorized!"})
    }
}

export default authMiddleware