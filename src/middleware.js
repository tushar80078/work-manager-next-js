import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request)
{
     const authToken = request.cookies.get("loginToken")?.value;

    if( request.nextUrl.pathname == "/api/login" || request.nextUrl.pathname == "/api/users" || request.nextUrl.pathname == "/api/current")
    {
        return;
    }
     const loggedInUserNotAccessPaths = request.nextUrl.pathname == "/login" || request.nextUrl.pathname=='/signup'


    if(loggedInUserNotAccessPaths)
    {
        if(authToken)
        {
            return NextResponse.redirect(new URL("/profile/user",request.url));
        }
    }else{

        //Accesing secured routes

        if(!authToken)
        {
            return NextResponse.redirect(new URL("/login",request.url));
        }
    }

   // return NextResponse.redirect(new URL('/home',request.url))
}

export const config ={
    matcher :[
        "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*"]
}