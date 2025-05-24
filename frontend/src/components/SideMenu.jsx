import React, { useEffect, useRef } from "react";
import tornpage from "../assets/tornPage.png";
import blackboard from "../assets/blackboard.png";
import bg from "../assets/menu-bg.png";

const SideMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={menuRef}
      id="side-menu"
      className={`flex flex-col justify-between fixed top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-300 overflow:hidden z-50 rounded-xl
      ${isOpen ? "translate-x-[-50%]" : "translate-x-full"}
    `}
      style={{
        width: "50%",
        maxWidth: "50%",
        height: "67vh",
        maxHeight: "67vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img
        src={tornpage}
        alt=""
        className="absolute -top-6  w-full scale-150 h-[40%]"
      />
      <img
        src={tornpage}
        alt=""
        className="absolute -top-2  w-full scale-150 h-[40%]"
      />
      <img
        src={tornpage}
        alt=""
        className="absolute top-4  w-full h-[40%] scale-160"
      />

      <img
        src={blackboard}
        alt=""
        className="-z-30 absolute top-23 w-full h-[70%]"
      /> */}
      <div className="absolute top-[18%] left-0 w-full h-[50%] flex flex-col items-center justify-center z-10 text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-4">
          <span
            className="relative inline-block
             after:content-['']
             after:absolute after:left-0 after:right-10 after:-bottom-3 after:h-1 after:bg-[#E0D100]
             before:content-['']
             before:absolute before:left-0 before:right-0 before:-bottom-1 before:h-1 before:bg-[#E0D100]"
          >
            <span className="no-underline">MENU</span>
          </span>
        </h1>
        <ul className="space-y-2 text-2xl font-bold">
          <li>Home</li>
          <li>About Us</li>
          <li>Leadership Team</li>
          <li>Creative Team</li>
          <li>Portfolio</li>
          <li>Contact Us</li>
        </ul>
      </div>

      {/* <img
        src={tornpage}
        alt=""
        className="absolute -bottom-9  w-full scale-150 h-[40%]"
      />
      <img
        src={tornpage}
        alt=""
        className="absolute -bottom-15  w-full scale-150 h-[40%]"
      />
      <img
        src={tornpage}
        alt=""
        className="absolute -bottom-18  w-full h-[40%]"
      /> */}
    </div>
  );
};

export default SideMenu;
