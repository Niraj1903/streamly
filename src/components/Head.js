import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      <div className="grid grid-flow-col shadow-lg p-5">
        <div className="flex pl-2 pt-2 col-span-1">
          <GiHamburgerMenu
            className="cursor-pointer"
            onClick={toggleMenuHandler}
          />
          <img
            className="w-8 -mt-4 mr-4 pt-2 pl-2"
            src="/streamlyLogo.svg"
            alt="Hamburger Logo"
          />
        </div>
        <div className="w-full flex col-span-10 m-auto">
          <input
            className="w-6/12 border border-gray-400 rounded-l-full px-2"
            type="text"
            placeholder="Search"
          />
          <button className="border border-gray-400 rounded-r-full px-2 bg-gray-300">
            <IoIosSearch />
          </button>
        </div>
        <div className="flex col-span-1">
          <FaUserCircle className="h-8 w-14" />
        </div>
      </div>
    </>
  );
};

export default Head;
