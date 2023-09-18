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

export async function getTasksOfUser(userId)
{
    try {
        const result = await httpAxios.get(`/api/users/${userId}/tasks`).then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in getTask Service : \n",error);
     }
}

export async function deleteTask(taskId)
{
    
    try {
        const result = await httpAxios.delete(`/api/tasks/${taskId}`).then((response)=>response.data);
        return result;
     } catch (error) {
         console.log("Error in getTask Service : \n",error);
     }
}