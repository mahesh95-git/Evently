import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is missing");
}

let cached = global.mongoose || { conn: null, promise: null };

export const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL, {
            dbName: "evently",
            bufferCommands: false,
        }).then((mongoose) => {
            console.log('Database connected successfully');
            return mongoose;
        }).catch((error) => {
            console.error('Database connection error:', error);
            throw error;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

global.mongoose = cached;
