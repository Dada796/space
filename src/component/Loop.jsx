import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Loop = () => {
  return (
    <div className="layout text-center mt-[80px]">
      <h1 className="text-white text-2xl">Stay in the Loop, Beyond Earth</h1>
      <p className="text-gray-500 text-xs my-4">
        Join our cosmic circle — get the latest mission updates,
        behind-the-scenes insights,
        <br />
        and discoveries sent straight to your inbox. No spam, just pure space
        magic.
      </p>
      <form>
        <div className=" max-w-[350px] relative mx-auto">
          <input
            type="email"
            placeholder="Enter mail"
            className="rounded-2xl border outline-none border-[#4B4B4B] w-full text-gray-400 p-2"
          />
          <button type="submit" className="bg-white absolute right-3 top-1 flex py-1 px-2 rounded-xl">
            Subscribe <MdOutlineArrowOutward />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loop;
