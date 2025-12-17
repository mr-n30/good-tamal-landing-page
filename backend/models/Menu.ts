import { Schema, model, Document } from 'mongoose'

export interface IMenu extends Document {
    name: string
    price: number
    description: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    signatureDish?: boolean
}

const MenuSchema = new Schema<IMenu>({
    name: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    signatureDish: { type: Boolean, required: false, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

export default model<IMenu>('Menu', MenuSchema)