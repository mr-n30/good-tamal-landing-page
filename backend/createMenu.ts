import mongoose from 'mongoose'
import Menu from './models/Menu'
import dotenv from 'dotenv'

dotenv.config()

const run = async () => {
    await mongoose.connect(process.env.MONGO_URI!)

    Menu.insertMany([
        {
            name: "Pork Tamal",
            price: 4.50,
            description: 'Tender pork slow-cooked with red chili sauce, wrapped in fresh corn masa',
            imageAlt: 'Delicious Pork Tamal Image',
            imageUrl: 'https://images.unsplash.com/photo-1579630941962-435bc3e43df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc2NDQ3NTYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            name: "Chicken Tamal",
            price: 4.50,
            description: 'Succulent chicken breast with green salsa verde and fresh cilantro',
            imageAlt: 'Delicious Chicken Tamal Image',
            imageUrl: 'https://images.unsplash.com/photo-1579630941962-435bc3e43df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc2NDQ3NTYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        },
        {
            name: "Sweet Corn Tamal",
            price: 4.00,
            description: 'Sweet corn masa with a hint of cinnamon and raisins, perfect for dessert',
            imageAlt: 'Delicious Sweet Corn Tamal Image',
            imageUrl: 'https://inmamamaggieskitchen.com/wp-content/uploads/2024/12/Tamales-de-Elote.jpg',
        }
    ])

    await mongoose.disconnect()
    console.log('Menu created')
}

process.exit()