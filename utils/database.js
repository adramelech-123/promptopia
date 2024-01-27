import mongoose from "mongoose";

let isConnected = false

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
}