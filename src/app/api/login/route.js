import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  Jwt from "jsonwebtoken";
import { connectDB } from "@/helper/db";


connectDB();

export async function POST(request)
{
    try {
        
        const {email, password} = await request.json();

        const user= await User.findOne({
            email: email
        });

        if(user== null)
        {
            return NextResponse.json({
                message:"User Not found!",
                success:false
            });
        }

        const matched = bcrypt.compareSync(password,user.password);

        if(!matched)
        {
            return NextResponse.json({
                message:"Password is wrong!",
                success:false
            });
        }

        const token = Jwt.sign({
            _id:user._id,
            name:user.name,

        },process.env.JWT_KEY)

        const response = NextResponse.json({
            message:"Login success!!",
            success:true,
            user: user
        });

        response.cookies.set("loginToken",token,{
            expiresIn: Date.now() +  24 * 60 * 60 * 1000,
            httpOnly : true
        })

        return response;

    } catch (error) {
        
        return NextResponse.json({
            message:error.message,
            success:false
        },{
            status: 500
        })


    }
}