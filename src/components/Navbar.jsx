import React, { useState } from "react";
import { navbarData } from "../Data";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = (event) => {
    console.log("scrollTop: ", event.currentTarget.scrollTop);
    console.log("offsetHeight: ", event.currentTarget.offsetHeight);
  };

  return (
    <div
      id="home"
      onScroll={handleScroll}
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 rounded text-gray-500"
    >
      <h1 className="w-full text-3xl font-bold text-black">Fit2Shape</h1>
      <ul className="hidden md:flex">
        {navbarData.map((item, index) =>
          item.status ? (
            <li key={index} className="p-4">
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="text-gray-800"
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={index} className="p-4">
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-gray-800"
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        onClick={handleNav}
        className={
          nav
            ? "fixed z-40 left-0 top-0 w-[60%] h-full border-r border-r-gray-100 bg-white ease-in-out duration-500 block md:hidden"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-gray-800 m-4">
          Fit2Shape
        </h1>
        {navbarData.map((item, index) =>
          item.status ? (
            <li key={index} className="p-4 border-b border-gray-300">
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                className="text-gray-800"
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={index} className="p-4 border-b border-gray-300 ">
              <Link
                to={item.url}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-gray-800"
                style={{ cursor: "pointer" }}
                onClick={handleNav}
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Navbar;
