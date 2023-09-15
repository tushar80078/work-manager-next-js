import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

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

        const task = new Task(postData);

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

