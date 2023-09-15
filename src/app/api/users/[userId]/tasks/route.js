import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task"
import { NextResponse } from "next/server";


export async function GET(request,{params})
{
    try {
        const {userId} = params;

        const task = await Task.find({ userId: userId });

        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed To Update User",
            success:false
        })
    }
}