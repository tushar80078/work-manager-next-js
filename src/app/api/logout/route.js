import { NextResponse } from "next/server";



export async function POST(request)
{
    try {
        
        const response= NextResponse.json({
            message:"Logged out !!",
            success:true
        })

        response.cookies.set("loginToken","",{
            expires:new Date(0)
        });

        return response;
    } catch (error) {
        console.log(error);
    }

}