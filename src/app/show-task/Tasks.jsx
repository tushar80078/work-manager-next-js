import UserContext from "@/context/UserContext";
import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Tasks = ({ task, key, deleteTaskParent }) => {
  const context = useContext(UserContext);

  const deleteTask = async (taskId) => {
    deleteTaskParent(taskId);
  };

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status === "completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">{task.title}</h1>
          <span
            onClick={() => deleteTask(task._id)}
            className="shadow-lg bg-gray-900 rounded-full p-2 text-xl cursor-pointer hover:bg-red-700"
          >
            {" "}
            <AiOutlineDelete />
          </span>
        </div>

        <p className="text font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status : <span className="font-semibold"> {task?.status}</span>
          </p>
          <p className="text-right">
            Autor :{" "}
            <span className="font-semibold"> {context?.user?.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
