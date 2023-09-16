import React from "react";
import { FcGlobe } from "react-icons/fc";

import { LuBellDot, LuSearch, LuMenuSquare } from "react-icons/lu";
import NavigationFeed from "../Navigation/NavigationFeed";

const FeedHeader = () => {
  return (
    <div className='nav_container'>
      <div className='icons'>
        <div className='icons__left'>
          <LuMenuSquare className='icon' />
        </div>
        <div className='icons__right'>
          <LuSearch className='icon' />
          <LuBellDot className='icon' />
          <FcGlobe className='icon' />
        </div>
      </div>

      <NavigationFeed />
    </div>
  );
};

export default FeedHeader;
