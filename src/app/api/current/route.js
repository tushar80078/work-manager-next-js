import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { User } from "@/models/user";

export async function GET(request)
{
     try {
          
        const authToken = request.cookies.get("loginToken")?.value;

        if(!authToken)
        {
            return NextResponse.json({
                    message:"Token not found",
                    success:false
            }) 
        }

        try {

            const verifiedToken = jwt.verify(authToken, process.env.JWT_KEY);

            const user = await User.findById(verifiedToken._id);

            if(!user)
            {
                return NextResponse.json({
                    message:"User not found",
                    success:false
                })
            }


            return NextResponse.json({
                message:"Success",
                user:user
            })

            
        } catch (error) {

            console.log("Error : ",error);

            return NextResponse.json({
                message:"Unauthorized User !!",
                success:false
             }) 
        }
        
        

    } catch (error) {
     
        console.log("Error : ",error);

        return NextResponse.json({
            message:"Error in fething user!!",
            success:false
        })
        
    }
    
}