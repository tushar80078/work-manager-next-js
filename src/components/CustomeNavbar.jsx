"use client";
import UserContext from "@/context/UserContext";
import { logOutUser } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Customenavbar = () => {
  let context = useContext(UserContext);

  const router = useRouter();

  const doLogOut = async () => {
    try {
      const result = await logOutUser();

      console.log("result : ", result);

      context.setUser(undefined);

      router.push("/");
    } catch (error) {
      toast.error("Error in logout user", {
        position: "top-center",
        autoClose: 1000,
        pauseOnFocusLoss: false,
        pauseOnHover: false,
      });
    }
  };

  return (
    <nav className="bg-blue-900 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context?.user && (
            <>
              <li>
                <Link href={"/"} className="hover:text-blue-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/add-task"} className="hover:text-blue-100">
                  Add Tasks
                </Link>
              </li>
              <li>
                <Link href={"/show-task"} className="hover:text-blue-100">
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context?.user && (
            <>
              <li>
                <Link href={"#!"} className="hover:text-blue-100">
                  {context.user.name}
                </Link>
              </li>
              <li>
                <button onClick={doLogOut} className="hover:text-blue-100">
                  LogOut
                </button>
              </li>
            </>
          )}

          {!context?.user && (
            <>
              <li>
                <Link href={"/login"} className="hover:text-blue-100">
                  Login
                </Link>
              </li>
              <li>
                <Link href={"/signup"} className="hover:text-blue-100">
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Customenavbar;
