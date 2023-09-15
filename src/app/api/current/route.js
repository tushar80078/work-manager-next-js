import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { User } from "@/models/user";

export async function GET(request)
{
    const authToken = request.cookies.get("loginToken")?.value;
   
    const verfiedToken = jwt.verify(authToken,process.env.JWT_KEY);

    const user = await User.findById(verfiedToken._id);

    

    return NextResponse.json({
        message:"Success",
        user:user
    })
}