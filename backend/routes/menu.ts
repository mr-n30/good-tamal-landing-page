import { Router, Request, Response } from 'express'
import Menu from '../models/Menu'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const menu = await Menu.find()
        return res.status(200).send(menu)
    }
    catch (error) {
        return res.status(500).send({ message: 'Server Error' })
    }
})

export default router