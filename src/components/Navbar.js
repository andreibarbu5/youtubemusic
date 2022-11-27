import React from "react";
import logo from "../photos/logo.png";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineExplore, MdOutlinePlaylistPlay } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 pt-3">
      {/* Left Side */}
      <div className="">
        <img src={logo} alt="" className="w-32" />
      </div>
      {/* Middle */}
      <div className="">
        <ul className="flex items-center gap-6 lg:gap-10 ">
          <li>
            <RiHomeLine className="navbtn" />
            <p className="hidden lg:flex text-[22px] font-bold">Home</p>
          </li>
          <li>
            <MdOutlineExplore className="navbtn" />
            <p className="hidden lg:flex text-[22px] font-bold">Trending</p>
          </li>
          <li>
            <MdOutlinePlaylistPlay className="navbtn" />
            <p className="hidden lg:flex text-[22px] font-bold">Playlists</p>
          </li>
          <li>
            <FiSearch className="navbtn" />
            <p className="hidden lg:flex text-[22px] font-bold">Search</p>
          </li>
          <li>
            <BsDisplay className="navbtn" />
          </li>
        </ul>
      </div>
      {/* Right Side */}
      <div className="bg-white py-1 px-2.5 rounded-[0.3rem]">
        <button className="text-black font-semibold">LOG IN</button>
      </div>
    </div>
  );
};

export default Navbar;
