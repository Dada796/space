import React from "react";
import companies from "../assets/companies.png";

const Company = () => {
  return (
    <div className="my-8">
      <img src={companies} alt={companies} className="md:h-[100px] w-full" />
    </div>
  );
};

export default Company;
