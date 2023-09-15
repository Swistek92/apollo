import Image from "next/image";
import React from "react";
import img from "@/public/img.jpeg";

import { FaLocationArrow } from "react-icons/fa";
const Drone = () => {
  return (
    <div className='drone'>
      <Image className='image' alt='img' width={1000} height={1000} src={img} />
      <div className='subtitle'>
        <span className='text'>7.7.7777.</span>
        <br />
        <span className='text'> DJI Mini 7</span>
      </div>
      <div className='arrow'>
        <FaLocationArrow />
      </div>
    </div>
  );
};

export default Drone;
