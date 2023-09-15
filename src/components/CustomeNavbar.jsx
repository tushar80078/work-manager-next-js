"use client";
import Link from "next/link";
import React from "react";

const Customenavbar = () => {
  return (
    <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
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
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <a href="#!">LogIn</a>
          </li>
          <li>
            <Link href={"/signup"} className="hover:text-blue-100">
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Customenavbar;
