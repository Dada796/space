import React from "react";
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <header className="bg-black border-b border-b-[#EFEFEF]">
      <nav className="layout flex justify-between">
        <div className="flex justify-between gap-[33px]">
          <div>
            <img src={logo} alt={logo} className="w-[145px] h-[65px]" />
          </div>
          <div className="hidden md:flex justify-between gap-4 my-auto text-[#EFEFEF]">
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">Resources</a>
            <a href="">Blog</a>
            <a href="">About</a>
          </div>
        </div>
        <div className="my-auto">
          <button className="hidden md:block rounded-xl py-[10px] px-[29px] bg-[#FFFFFF]">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
