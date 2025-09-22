import React from "react";
import space from "../assets/space.png";
import pic from "../assets/pic.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="layout flex flex-col md:flex-row justify-between gap-8 items-center">
      <div className="md:w-[50%] p-4">
        <div className="flex justify-baseline gap-2 md:w-[40%]">
          <div>
            <img src={pic} alt="" className="w-[60px] h-[20px]" />
          </div>
          <div>
            <h1 className="text-[#FFFFFF] text-xs">
              Join over 34k happy clients
            </h1>
          </div>
        </div>
        <h1 className="text-[#FFFFFF] text-5xl my-4">
          Beyond Space
          <br />
          Beyond Limit.
        </h1>
        <p className="text-[#B1B1B1] text-xs">
          We innovate at the forefront of technology,
          <br />
          crafting solutions that shape the future.
        </p>
        <button className="bg-white right-3 flex py-1 px-2 rounded-xl my-6">
          Get Started <MdOutlineArrowOutward />
        </button>
      </div>
      <div className="my-8">
        <img
          src={space}
          alt={space}
          className="object-contain md:h-[450px] w-[450px]"
        />
      </div>
    </div>
  );
};

export default Hero;
