import React, { useEffect, useRef } from "react";
import bg from "../assets/menu-bg.png";
import hoverBg from "../assets/white-bg.png";

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

  const menuItems = [
    { id: "welcome", label: "Home" },
    { id: "aboutus", label: "About Us" },
    { id: "about", label: "Leadership Team" },
    { id: "services", label: "Creative Team" },
    { id: "testimonials", label: "Portfolio" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div
      ref={menuRef}
      id="side-menu"
      className={`flex flex-col justify-between fixed top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-300 overflow-hidden z-50 rounded-xl
        ${
          isOpen
            ? "translate-x-0 xl:translate-x-[-270px] 2xl:translate-x-[-310px]"
            : "translate-x-full"
        }`}
      style={{
        width: "100vw",
        maxWidth: "904px",
        height: "100vh",
        maxHeight: "595px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[16%] left-0 w-full h-[50%] flex flex-col items-center justify-center z-10 text-white text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white mb-10">
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
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="relative inline-block px-3 py-1 rounded group"
              >
                <span
                  className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    backgroundImage: `url(${hoverBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1,
                  }}
                ></span>
                <span className="relative z-10 group-hover:text-[#005AE0]">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
