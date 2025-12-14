import mongoose from 'mongoose'
import Menu from './models/Menu'
import dotenv from 'dotenv'

dotenv.config()

const run = async () => {
    try {
        console.log('Creating menu...')
        await mongoose.connect(process.env.MONGO_URI!)
        await Menu.insertMany([
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
                imageUrl: 'https://i1.wp.com/thetiptoefairy.com/wp-content/uploads/2019/12/rotisserie-chicken-tamales-sq.png?resize=720%2C720&ssl=1',
            },
            {
                name: "Sweet Corn Tamal",
                price: 4.00,
                description: 'Sweet corn masa with a hint of cinnamon and raisins, perfect for dessert',
                imageAlt: 'Delicious Sweet Corn Tamal Image',
                imageUrl: 'https://inmamamaggieskitchen.com/wp-content/uploads/2024/12/Tamales-de-Elote.jpg',
            },
            {
                name: "Cheese & Jalapeño",
                price: 4.75,
                description: 'Creamy queso fresco with roasted jalapeños for the perfect kick',
                imageAlt: 'Delicious Cheese & Jalapeño Tamal Image',
                imageUrl: 'https://storage.googleapis.com/dam-prs-prd-c7e7986.prs.prd.v8.commerce.mi9cloud.com/1%20Recipes/XRIUd1p4.jpg'
            },
            {
                name: 'Mole Tamal',
                price: 5.00,
                description: 'Rich mole sauce with chicken, featuring chocolate and spices',
                imageAlt: 'Delicious Mole Tamal Image',
                imageUrl: 'https://www.espressomykitchen.com/wp-content/uploads/2024/09/espresso-my-kitchen-mole-tamales-3.jpg',
            },
            {
                name: 'Vegetarian Tamal',
                price: 4.20,
                description: 'Fresh vegetables, black beans, and roasted peppers in savory masa',
                imageAlt: 'Delicious Vegetarian Tamal Image',
                imageUrl: 'https://mjskitchen.com/wp-content/uploads/2012/12/Tamale2_Web.jpg',
            }
        ])

        await mongoose.disconnect()

        console.log('Menu created')
    } catch (error) {
        console.error('Error creating menu:', error)
    }
}

run()