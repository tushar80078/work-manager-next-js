import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task)
{

    try {
       const result = await httpAxios.post("/api/tasks",task).then((response)=>response.data);
       return result;
    } catch (error) {
        console.log("Error in addTaskService : \n",error);
    }

}