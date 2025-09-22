import React from "react";
import moon from "../assets/moon.png";

const Moon = () => {
  return (
    <div className="layout py-4 my-4 flex flex-col md:flex-row justify-evenly gap-6">
      <div className="md:w-[40%] my-auto">
        <h1 className="text-white text-3xl">
          Moon watch view
          <br />
          with NASA
        </h1>
        <p className="my-4 text-gray-500">
          Under the gaze of the Moon, we partnered with NASA to bring
          <br />
          space closer than ever — a night of discovery, wonder, and
          <br />
          breakthrough moments.
        </p>

        <p className="text-white font-light">Educational Outreach</p>
        <p className="text-white font-light my-2">Data Collaboration</p>
        <p className="text-white font-light my-2">
          Real-Time Public Engagement
        </p>
      </div>
      <div className="md:w-[40%]">
        <img src={moon} alt={moon} />
      </div>
    </div>
  );
};

export default Moon;
