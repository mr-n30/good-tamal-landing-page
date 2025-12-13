import { Schema, model, Document } from 'mongoose'
interface item {
    menuItemId: string
    quantity: number
}

export interface Order extends Document {
    customerId: string
    items: Array<item>
    email: string
    address: string
    status: 'pending' | 'preparing' | 'delivering' | 'completed' | 'cancelled'
    createdAt: Date
    updatedAt: Date
    deliveryTime: Date
    pickupTime: Date
}

const CustomerOrderSchema = new Schema<Order>({
    customerId: { type: String, required: true },
    items: [
        {
            menuItemId: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    email: { type: String, required: true},
    address: { type: String, required: false},
    status: { type: String, enum: ['pending', 'preparing', 'delivering', 'completed', 'cancelled'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deliveryTime: { type: Date, required: false },
    pickupTime: { type: Date, required: false },
})