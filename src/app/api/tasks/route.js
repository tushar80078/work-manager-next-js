import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

//connectDB();

// Get All The Tasks

export async function GET()
{
    try {
            const tasks = await Task.find();

            return NextResponse.json({
                status:true,
                message:"Task Fetched Successfully",
                tasks : tasks
            })

    } catch (error) {
        console.log(error);
        return getResponseMessage("Error in getting data!!",404,false);
    }

}


// Create All The Tasks

export async function POST(request)
{
    try {
        
        const postData =await request.json();

        const authToken = request.cookies.get("loginToken")?.value;

        const verifiedToken = jwt.verify(authToken, process.env.JWT_KEY);

        const user = await User.findById(verifiedToken._id);



        const task = new Task({...postData,userId:user._id});

        const saveTask = await task.save();

        return NextResponse.json({
            status:true,
            message:"Post created successfully",
            task:saveTask
        })

    } catch (error) {
        console.log(error);
        return   getResponseMessage("failed to create task",500,false);
  
    }

}

