import mongoose from "mongoose";
const MONGO = "mongodb+srv://samirkumar:220nipu@db.dho4l.mongodb.net/URL"

const connectDB = async() =>{
    try {
        const connect = await mongoose.connect(MONGO);
        console.log(`Mongodb connected:${connect.connection.host}`);
    } catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
};

export default connectDB;