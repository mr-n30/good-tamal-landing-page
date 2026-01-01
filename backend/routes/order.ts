import express, { Request, Response } from 'express'
import orderMiddleware from '../middleware/order'
import Order from '../models/Order'
import JWTHelper from '../util/auth'

const router = express.Router()

router.get('/order', orderMiddleware, async (req: Request, res: Response) => {
    const jwtHelper = new JWTHelper()
    const tokenDecoded = await jwtHelper.verifyToken(req.cookies.refresh_token)

    if (typeof tokenDecoded === 'string') {
        return res.status(401).json({ message: 'Invalid token.' })
    }

    const order = await Order.findOne({ customerId: tokenDecoded.user_id })

    return res.json({ message: 'Order fetched!', order })
})

router.post('/order', orderMiddleware, async (req: Request, res: Response) => {
    const jwtHelper = new JWTHelper()
    const tokenDecoded = await jwtHelper.verifyToken(req.cookies.refresh_token)

    if (typeof tokenDecoded === 'string') {
        return res.status(401).json({ message: 'Invalid token.' })
    }

    const newOrder = new Order({
        customerId: tokenDecoded.user_id,
        items: [...req.body?.items],
        email: req.body?.email,
        phone: req.body?.phone,
        address: req.body?.address,
        deliveryInstructions: req.body?.deliveryInstructions
    })

    await newOrder.save()

    return res.json({ message: 'Order created!', order: newOrder })
})

export default router