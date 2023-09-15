"use client";

import React, { useState } from "react";
import signupBanner from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "../../services/userService";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "data:image/png;base64,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",
  });

  const doSignup = async (event) => {
    event.preventDefault();

    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
      return;
    }

    try {
      const result = await signUp(data);

      if (result.status == true) {
        toast.success("User is registered", {
          position: "top-center",
          autoClose: 1000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });

        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      } else {
        toast.warning("Failed to create user! Please try another Email", {
          position: "top-center",
          autoClose: 1000,
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while adding user", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="my-5 flex justify-center ">
            <Image
              src={signupBanner}
              alt="signup banner"
              style={{ width: "70%" }}
            />
          </div>

          <h1 className="text-3xl text-center">Signup Here</h1>

          <form
            action="#!"
            className="mt-5"
            onSubmit={(event) => doSignup(event)}
          >
            {/* Name */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2  "
              >
                User Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                id="user_name"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                onChange={(event) => {
                  setData({ ...data, name: event.target.value });
                }}
                value={data.name}
              />
            </div>

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
                  setData({ ...data, email: event.target.value });
                }}
                value={data.email}
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
                  setData({ ...data, password: event.target.value });
                }}
                value={data.password}
              />
            </div>

            {/* About */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2  "
              >
                User About
              </label>
              <textarea
                placeholder="I am full stack developer"
                id="user_about"
                name="about"
                className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                rows={3}
                onChange={(event) => {
                  setData({ ...data, about: event.target.value });
                }}
                value={data.about}
              />
            </div>

            {/* Button actions */}
            <div className="mt-4 flex justify-center">
              <button className="bg-green-600 py-2 px-3 rounded-lg hover:bg-green-400">
                SignUp
              </button>
              <button className="bg-orange-600 py-2 px-3 ms-5 rounded-lg hover:bg-orange-400">
                Reset
              </button>
            </div>
            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
