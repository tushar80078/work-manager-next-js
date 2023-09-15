import { User } from "@/models/user";
import { NextResponse } from "next/server";



// Get User
export async function GET(request,{params}){

    try {
        const {userId} = params;

        const getUser = await User.findById({
            _id :  userId
        })
    
        return NextResponse.json({
            success:true,
            message:"User Fetched",
            user: getUser
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed To Get User",
            success:false
        })
    }
}


// Delete User
export async function DELETE(request,{params}){

    try {
        const {userId} = params;

        const deletedUser = await User.deleteOne({
            _id :  userId
        })
    
        return NextResponse.json({
            success:true,
            message:"User Deleted",
            deletedUser: deletedUser
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed To Delete User",
            success:false
        })
    }
}


// Update User
export async function PUT(request,{params}){

    try {
        const {userId} = params;

        let userData= await request.json();

        const getUser = await User.findById(userId);

        const updatedUser = new User({...userData,...getUser});

        const savedUser= await updatedUser.save();
    
    
        return NextResponse.json({
            success:true,
            message:"User updated",
            updatedUser: savedUser
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed To Update User",
            success:false
        })
    }
}