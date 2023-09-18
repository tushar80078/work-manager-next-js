"use client";
import React, { useState } from "react";
import loginSVG from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();

    try {
      const result = await addTask(task);

      toast.success("Task Added!!", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error While Adding Task!!", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className="grid grid-cols-12  justify-center">
      <div className=" col-span-4 col-start-5 p-5 ">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSVG}
            alt="login banner image"
            style={{ width: "50%" }}
          />
        </div>

        <h1 className="text-3xl text-center">Add Your Task Here</h1>

        <form action="#!" onSubmit={(event) => handleAddTask(event)}>
          {/* task Title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2 "
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({ ...task, title: event.target.value });
              }}
              value={task.title}
            />
          </div>

          {/* task Content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2 "
            >
              Content
            </label>
            <textarea
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={4}
              name="task_content"
              onChange={(event) => {
                setTask({ ...task, content: event.target.value });
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              id="task_satu"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="task_status"
              onChange={(event) => {
                setTask({ ...task, status: event.target.value });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Button actions */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Task
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>
          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
