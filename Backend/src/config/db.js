import mongoose from "mongoose";

export const ConnectDB=async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB is successfully connected");
    } catch (error) {
        console.log("Failed to connect to mongoDB",error);
        process.exit(1)// exit with failure
    }
}





a