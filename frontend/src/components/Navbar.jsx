import React, { useState } from "react";
import logo from "../assets/logo.png";
import blackboard from "../assets/blackboard.png";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getBarClasses = (widthClass) => {
    return `block lg:h-2 md:h-1.5 h-1 ${widthClass} transition-all duration-300`;
  };

  const getBarStyle = () => {
    return isHovered || isOpen
      ? {
          backgroundImage: `url(${blackboard})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      : { backgroundColor: "#005AE0" };
  };

  return (
    <div className="flex items-center justify-between py-2 px-4 border-b border-gray-400">
      <div className="lg:w-50 lg:h-25 md:w-45 md:h-22.5 sm:w-40 sm:h-20 w-35 h-17.5">
        <img
          src={logo}
          alt=""
          className="w-full h-full object-contain scale-200"
        />
      </div>
      <div className="mr-5">
        <button
          id="menu-button"
          className="cursor-pointer flex flex-col justify-between lg:w-15 lg:h-10 md:w-13 md:h-8 w-11 h-6 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={getBarClasses("w-3/4")} style={getBarStyle()}></span>
          <span
            className={getBarClasses("w-full")}
            style={getBarStyle()}
          ></span>
          <span className={getBarClasses("w-3/4")} style={getBarStyle()}></span>
        </button>
      </div>

      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen}></SideMenu>
    </div>
  );
};

export default Navbar;
