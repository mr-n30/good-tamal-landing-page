import { Schema, model, Document } from 'mongoose'
import bcrypt from "bcrypt"

export interface IUser extends Document {
    firstName: string
    lastName: string
    email: string
    password: string
    dob?: Date
    createdAt: Date
    updatedAt: Date
}

const UserSchema = new Schema<IUser>({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        dob: { type: Date, required: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    }
)

UserSchema.pre<IUser>('save', async function() {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, 10)
    }
})

export default model<IUser>('User', UserSchema)