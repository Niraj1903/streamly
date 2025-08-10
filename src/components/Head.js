import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const cache = useSelector((store) => store.search);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestion(cache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

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
            value={searchQuery}
            onChange={handleSearchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 rounded-r-full px-2 bg-gray-300">
            <IoIosSearch />
          </button>

          {showSuggestion && (
            <div className="bg-white fixed shadow-lg rounded-md my-[25.5px] px-5 w-[37rem] border border-gray-100">
              <ul>
                {suggestion.map((s, index) => (
                  <li
                    key={index}
                    className="flex py-2 shadow-sm hover:bg-gray-200"
                  >
                    <IoIosSearch className="mt-[6px] mr-[10px] hover:bg-gray-50" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex col-span-1">
          <FaUserCircle className="h-8 w-14" />
        </div>
      </div>
    </>
  );
};

export default Head;
