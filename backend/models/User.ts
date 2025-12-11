import { Schema, model, Document } from 'mongoose'

export interface IUser extends Document {
    firstName: string
    lastName: string
    email: string
    password: string
    dob?: Date
    createdAt: Date
    updatedAt: Date
}

const UserSchema = new Schema<IUser>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        dob: { type: Date, required: false },
    }
)

export default model<IUser>('User', UserSchema)