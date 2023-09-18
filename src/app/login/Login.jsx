"use client";
import UserContext from "@/context/UserContext";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useRouter();
  const context = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginSubmit = async (event) => {
    event.preventDefault();

    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid data", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }

    try {
      const result = await login(loginData);

      if (result.success == true) {
        toast.success("Logged In!!", {
          position: "top-center",
          autoClose: 1000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });

        context.setUser(result.user);

        navigate.push("/profile/user");
      } else {
        toast.error("Check your password", {
          position: "top-center",
          autoClose: 1000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      toast.error("Error In Login Please Try After Some Time", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5"> </div>

        <h1 className="text-3xl text-center">Login Here</h1>

        <form action="#!" onSubmit={(event) => loginSubmit(event)}>
          {/* Email */}
          <div className="mt-3">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium mb-2  "
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="john_doe@email.com"
              id="user_email"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              onChange={(event) => {
                setLoginData({ ...loginData, email: event.target.value });
              }}
              value={loginData.email}
            />
          </div>

          {/* Password */}
          <div className="mt-3">
            <label
              htmlFor="user_password"
              className="block text-sm font-medium mb-2  "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="abc234$"
              id="user_password"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              onChange={(event) => {
                setLoginData({ ...loginData, password: event.target.value });
              }}
              value={loginData.password}
            />
          </div>

          {/* Button actions */}
          <div className="mt-4 flex justify-center">
            <button className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-400">
              Login
            </button>
            <button className="bg-orange-600 py-2 px-3 ms-5 rounded-lg hover:bg-orange-400">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
