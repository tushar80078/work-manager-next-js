import mongoose from "mongoose"

import { User } from "@/models/user";

export const connectDB= async()=>{
    try {
        
    const {connection}= await   mongoose.connect(process.env.MONGO_DB_URL)

    console.log("Db Conected");

    // Testing and creating new user

    // const user = new User({
    //     name:"Test name",
    //     email :"test@gmail.com",
    //     password :"testpassword",
    //     about:"this is testing"
    // });

    // await user.save();

    // console.log("User created");

} catch (error) {
        console.log("Failed to connect db",error);
    }
}