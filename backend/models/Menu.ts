import { Schema, model, Document } from 'mongoose'

export interface IMenu extends Document {
    name: string
    price: string
    description: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
}

const MenuSchema = new Schema<IMenu>({
    name: { type: String, required: true},
    price: { type: String, required: true},
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now},
})

export default model<IMenu>('Menu', MenuSchema)