import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="layout mt-[80px] py-6">
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <div className="md:w-[37%] flex flex-col justify-between rounded-3xl border border-[#1E1E1E] p-4">
          <div>
            <img src={logo} alt="" className="w-[100px] h-[50px]" />
            <p className="text-gray-400 mt-4 text-[18px]">
              Our unparalleled voyages transform the dream of <br />
              space travel into a tranquil reality, inviting you to <br />
              discover the universe with peace and wonder.
            </p>
          </div>
          <div>
            <p className="mt-16 text-gray-400">Location:</p>
            <p className="text-gray-400">35, Austin bridge, Lagos, Nigeria.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-3 text-gray-500 md:w-[58%]">
          <div className="flex flex-col gap-3">
            <a
              href=""
              className="border border-[#1E1E1E] w-[200px] h-[85px] flex justify-center items-center rounded-3xl"
            >
              Home
            </a>
            <a
              href=""
              className="border border-[#1E1E1E] w-[200px] h-[85px] flex justify-center items-center rounded-3xl"
            >
              Project
            </a>
            <a
              href=""
              className="border border-[#1E1E1E] w-[200px] h-[85px] flex justify-center items-center rounded-3xl"
            >
              Blogs
            </a>
            <a
              href=""
              className="border border-[#1E1E1E] w-[200px] h-[85px] flex justify-center items-center rounded-3xl"
            >
              About
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              Terms
            </a>
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              Privacy Notice
            </a>
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              Legal Policies
            </a>
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              Patnership
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              <BsTwitterX />
            </a>
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href=""
              className="w-[200px] h-[85px] flex justify-center items-center border border-[#1E1E1E] rounded-3xl"
            >
              <FaRedditAlien />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
