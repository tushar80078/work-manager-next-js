import { connectDB } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDB();

// Get task by id

export async function GET(request,{params})
{
    try {
        const {taskId} = params;

        const getTask = await Task.findById(taskId);

        return NextResponse.json(getTask);

    } catch (error) {
        console.log(error);
        return getResponseMessage("failed to get task",404,false);
    }
}


//Delete task by id 

export async function DELETE(request,{params})
{
    try {
        const {taskId} = params;

        const existingTask = await Task.findById(taskId);

        if (!existingTask) {
            return getResponseMessage("Task not found", 404, false);
        }

        const deleteTask = await Task.deleteOne({
            _id : taskId
        })

        return NextResponse.json({
            status:true,
            message:"Task deleted",
            deleteTask:deleteTask
        });

    } catch (error) {
        console.log(error);
        return getResponseMessage("failed to delete task",404,false);
    }
}

// To Update Task

export async function PUT(request, { params }) {
    try {
        const { taskId } = params;

        const data = await request.json();

        const existingTask = await Task.findById(taskId);

        if (!existingTask) {
            return getResponseMessage("Task not found", 404, false);
        }

        // Update the existing task with new data
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                existingTask[key] = data[key];
            }
        }

        // Save the updated task
        const updatedTask = await existingTask.save();

        return NextResponse.json({
            message:"task updated successfully",
            status:true,
            task:updatedTask
        });

    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to update task", 500, false);
    }
}
