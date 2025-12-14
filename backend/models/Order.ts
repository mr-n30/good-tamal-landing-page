// A model for customer orders
import { Schema, model, Document } from 'mongoose'

interface address {
    street: string
    city: string
    state: string
    zip: string
}

interface item {
    menuItemId: string
    quantity: number
}

export interface Order extends Document {
    customerId: string
    items: Array<item>
    email: string
    phone: string
    address: address
    status: 'pending' | 'preparing' | 'delivering' | 'completed' | 'cancelled'
    createdAt: Date
    updatedAt: Date
    deliveryTime: Date
    pickupTime: Date
}

const OrderSchema = new Schema<Order>({
    customerId: { type: String, required: false }, // optional for guest checkout
    items: [
        {
            menuItemId: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    email: { type: String, required: true},
    address: { type: Object, required: true},
    phone: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'preparing', 'delivering', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deliveryTime: { type: Date, required: false },
    pickupTime: { type: Date, required: false },
})

export default model<Order>('Order', OrderSchema)