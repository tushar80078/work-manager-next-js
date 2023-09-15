import React from 'react'

async function takeTime()
{
    await new Promise((res,rej)=>{
        setTimeout(() => {
            res()
        }, 3000);
    })
}

const page = async() => {
    await takeTime();
    
    // throw new Error("This is manual error")
    return (
    <div>This is about page</div>
  )
}

export default page