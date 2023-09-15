import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user){

    try {
        const result = await httpAxios.post("/api/users",user).then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in Add User : \n",error);
     }
}