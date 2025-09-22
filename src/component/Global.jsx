import React from 'react'
import map from "../assets/map.png"

const Global = () => {
  return (
    <div className='text-center mt-[50px] py-4'>
      <h1 className='text-white text-2xl md:text-3xl'>Creating global impact</h1>
      <img src={map} alt={map} className='object-contain md:w-[60%] h-[320px] mx-auto my-4'/>
    </div>
  );
}

export default Global