import React from "react";
import { FcGlobe } from "react-icons/fc";

import { LuBellDot, LuSearch, LuMenuSquare } from "react-icons/lu";

const Navigation = () => {
  return (
    <div className='nav_container'>
      <div className='icons'>
        <div>
          <LuMenuSquare className='icon' />
        </div>
        <div>
          <LuSearch className='icon' />
          <LuBellDot className='icon' />
          <FcGlobe className='icon' />
        </div>
      </div>

      <ul className='naviation'>
        <li>Tech</li>
        <li>Science</li>
        <li>Education</li>
        <li>Business</li>
      </ul>
    </div>
  );
};

export default Navigation;