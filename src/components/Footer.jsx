import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-600 mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col jusitfy-center ">
          <h1 className="text-3xl"> Welcome To Work Manager</h1>
          <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="text-center">
          <h1>Important Link</h1>
          <ul>
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Instagram</a>
            </li>
            <li>
              <a href="#!">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
