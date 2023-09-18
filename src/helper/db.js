import mongoose from "mongoose"

import { User } from "@/models/user";

const config={
    isConnected : 0
}

export const connectDB= async()=>{
    if(config.isConnected)
    {
        return;
    }
    try {
        
    const {connection}= await   mongoose.connect(process.env.MONGO_DB_URL)

    console.log("Db Conected");

    config.isConnected= connection.readyState;


} catch (error) {
        console.log("Failed to connect db",error);
    }
}