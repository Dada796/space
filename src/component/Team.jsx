import React from "react";
import ghuna from "../assets/ghuna.png";
import mehek from "../assets/mehek.png";
import fred from "../assets/fred.png";
import harry from "../assets/harry.png";

const Team = () => {
  return (
    <div className="layout text-center mt-[50px] p-2">
      <h1 className="text-white text-2xl">Our incredible team</h1>
      <p className="text-gray-500 text-xs my-4">
        Meet the people powering innovation, collaboration, and extraordinary
        <br />
        results every day.
      </p>
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <div className="border py-2 border-[#4B4B4B] bg-black rounded-xl md:w-[22%]">
          <img src={ghuna} alt={ghuna} className="w-full h-[80%]" />
          <h2 className="text-white my-2">Lizarius Ghuna</h2>
          <p className="text-sm text-gray-500">Cosmos head & Co founder</p>
        </div>
        <div className="border  py-2 border-[#4B4B4B] bg-black rounded-xl md:w-[22%]">
          <img src={mehek} alt={mehek} className="w-full h-[80%]" />
          <h2 className="text-white my-2">Mehek Chopra</h2>
          <p className="text-sm text-gray-500">Lead satellite</p>
        </div>
        <div className="border py-2 border-[#4B4B4B] bg-black rounded-xl md:w-[22%]">
          <img src={fred} alt={fred} className="w-full h-[80%]" />
          <h2 className="text-white my-2">Fred Thomas</h2>
          <p className="text-sm text-gray-500">Bio-tech specialist</p>
        </div>
        <div className="border py-2 border-[#4B4B4B] bg-black rounded-xl md:w-[22%]">
          <img src={harry} alt={harry} className="w-full h-[80%]" />
          <h2 className="text-white my-2">Harry James</h2>
          <p className="text-sm text-gray-500">Lead quantum processor</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
