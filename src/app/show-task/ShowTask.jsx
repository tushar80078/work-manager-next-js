"use client";
import UserContext from "@/context/UserContext";
import { deleteTask, getTasksOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Tasks from "./Tasks";
import { toast } from "react-toastify";

const ShowTask = () => {
  const [tasks, setTasks] = useState([]);

  const context = useContext(UserContext);

  async function loadTasks(userId) {
    try {
      const tasks = await getTasksOfUser(userId);

      setTasks([...tasks].reverse());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  const deleteTaskParent = async (taskId) => {
    try {
      const result = await deleteTask(taskId);

      if (result?.status == true) {
        toast.success("Task Deleted", {
          position: "top-center",
          autoClose: 1000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
        if (context.user) {
          loadTasks(context.user._id);
        }
      } else {
        throw new Error("Error while deleting task", result);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while delete user", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className=" grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-2">Your Tasks ( {tasks.length} )</h1>

        {tasks.map((newTask) => {
          return (
            <Tasks
              task={newTask}
              key={tasks._id}
              deleteTaskParent={deleteTaskParent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowTask;
