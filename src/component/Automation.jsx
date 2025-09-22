import React from "react";
import satelite from "../assets/satelite.png";
import processing from "../assets/processing.png";
import integration from "../assets/integration.png"

const Automation = () => {
  return (
    <div className="layout mt-[60px]">
      <h1 className="text-white text-center text-2xl my-4">
        Powering the future with
        <br />
        quantum automation
      </h1>
      <p className="text-gray-600 text-xs text-center">
        We innovate at the forefront of technology, crafting
        <br />
        solutions that shape the future.
      </p>
      <div className="flex flex-col md:flex-row justify-center my-8">
        <div className="md:w-[28%] h-[240px] border border-[#4B4B4B] p-2 rounded-tl-2xl rounded-bl-2xl">
          <img src={satelite} alt={satelite} className="w-full h-[70%]" />
          <h2 className="text-white text-sm my-2">Space & Satellite Tech</h2>
          <p className="text-gray-600 text-xs">
            Connecting earth through advanced space tech.
          </p>
        </div>
        <div className="md:w-[28%] h-[240px] border border-[#4B4B4B] p-2">
          <img src={processing} alt={processing} className="w-full h-[70%]" />
          <h2 className="text-white text-sm my-2">Quantum Processing</h2>
          <p className="text-gray-600 text-xs">
            Next-gen speed through quantum breakthroughs.
          </p>
        </div>
        <div className="md:w-[28%] h-[240px] border border-[#4B4B4B] p-2 rounded-tr-2xl rounded-br-2xl">
          <img src={integration} alt={integration} className="w-full h-[70%]" />
          <h2 className="text-white text-sm my-2">BioTech Integration</h2>
          <p className="text-gray-600 text-xs">
            Where biology meets intelligent technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Automation;
