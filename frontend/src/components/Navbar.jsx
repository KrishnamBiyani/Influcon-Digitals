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
    <div
      className="flex items-center justify-between py-2 px-4 relative z-40"
      style={{ height: "72px" }}
    >
      <div
        className="lg:w-35 lg:h-17.5 md:w-30 md:h-15 sm:w-25 sm:h-12.5 w-35 h-17.5 ml-4"
        style={{ maxHeight: "72px" }}
      >
        <img
          src={logo}
          alt=""
          className="w-full h-full object-contain scale-225"
          style={{ maxHeight: "72px" }}
        />
      </div>
      <div className="mr-5">
        <button
          id="menu-button"
          className="cursor-pointer flex flex-col justify-between lg:w-14 lg:h-9 md:w-13 md:h-8 w-11 h-6 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
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

      {/* Overlay when side menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 transition-opacity duration-700"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navbar;
