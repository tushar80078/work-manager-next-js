const { NextResponse } = require("next/server")

export const getResponseMessage=(message,statusCode,successStatus)=>{
    return NextResponse.json({
        message:message,
        success:successStatus
    },{
        status:statusCode
    })
}
