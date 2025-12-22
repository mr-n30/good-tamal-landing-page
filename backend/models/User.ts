import { Schema, model, Document } from 'mongoose'
import bcrypt from "bcrypt"

export enum UserRole {
    USER = "user",
    ADMIN = "admin",
    EMPLOYEE = "employee",
}

export interface IUser extends Document {
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    confirmPassword: string
    dob?: Date
    createdAt: Date
    updatedAt: Date
    user_role: "user" | "admin" | "employee"
    comparePassword(candidatePassword: string): Promise<boolean>
}

const UserSchema = new Schema<IUser>({
        username: { type: String, required: true },
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        confirmPassword: { type: String, required: true },
        dob: { type: Date, required: false },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        user_role: {
            type: String,
            enum: ["user", "admin", "employee"],
            default: "user",
        },
    }
)

UserSchema.pre<IUser>('save', async function() {
    if (this.isModified('password') || this.isNew) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, 10)
    }
})

UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password)
}

export default model<IUser>('User', UserSchema)