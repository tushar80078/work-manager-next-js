import { connectDB } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs";


connectDB();

export async function GET()
{

   try 
   {
        let users=[]
        users = await User.find();
        return NextResponse.json(users);

   } catch (error) {
        console.log(error);
        return NextResponse.json({
        messgage:"Failed to get users",
        status:false
    })
   }
}


export async function POST(request)
{

    try 
    {
        let {name,email,password,about,profileURL} = await request.json();
        
        password = bcrypt.hashSync(password,parseInt(process.env.BCRYPT_SALT));
        
        const user = new User({name,email,password,about,profileURL})

        const createdUser = await user.save();

        return NextResponse.json({status:true,user},{
            
            status: 201,

        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to create user!!",
            status:false
        })
    }
}

