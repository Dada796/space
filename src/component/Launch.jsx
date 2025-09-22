import React from "react";
import launch from "../assets/launch.png";

const Launch = () => {
  return (
    <div className="layout py-4 flex flex-col md:flex-row justify-evenly gap-6 mt-[80px] ">
      <div className="md:w-[40%]">
        <img src={launch} alt={launch} />
      </div>
      <div className="md:w-[40%] my-auto p-2">
        <h1 className="text-white text-3xl">
          K2-11 Satellite
          <br />
          Launch
        </h1>
        <p className="text-gray-500 text-sm my-4">
          Lifting the future: K2-11 has launched — unlocking new frontiers in
          <br />
          space communication and earth observation.
        </p>
        <ul className="">
          <li className="text-white">Over 100,000 viewers participated live</li>
          <li className="text-white my-2">Led by Liz.co & NASA scientists.</li>
          <li className="text-white my-2">
            Lunar surface data for joint research on future missions.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Launch;
