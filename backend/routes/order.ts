// TODO: implement this and the admin panel
// Interviewer might see this but I gotta now make my personal site and this to portfolio
// Hello interviewer, please hire me! :)
import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/order', async (req: Request, res: Response) => {
    return res.json({message: 'Welcome to the orders endpoint'})
})

router.post('/order', async (req: Request, res: Response) => {
    return res.json({message: 'Order created!'})
})

export default router