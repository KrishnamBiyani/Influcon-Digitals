import React, { useEffect, useRef } from "react";
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
      ${
        isOpen
          ? "xl:translate-x-[-270px] 2xl:translate-x-[-310px]"
          : "translate-x-full"
      }
    `}
      style={{
        width: "904px",
        height: "595px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[18%] left-0 w-full h-[50%] flex flex-col items-center justify-center z-10 text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-8">
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
          <li>
            <a
              href="#welcome"
              className="inline-block px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#aboutus"
              className="inline-block px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="inline-block px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Leadership Team
            </a>
          </li>
          <li>
            <a
              href="#working"
              className="inline-block px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Creative Team
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="inline-block px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="inline-block px-4 py-1 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
