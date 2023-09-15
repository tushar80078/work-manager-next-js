import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user){

    try {
        const result = await httpAxios.post("/api/users",user).then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in Add User : \n",error);
     }
}


export async function login(logindata){

    try {
        const result = await httpAxios.post("/api/login",logindata).then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in Login User : \n",error);
     }
}


export async function currentUser(){

    try {
        const result = await httpAxios.get("/api/current").then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in Getting Logged In User : \n",error);
     }
}


export async function logOutUser(){

    try {
        const result = await httpAxios.post("/api/logout").then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in Getting Logged Out In User : \n",error);
     }
}
