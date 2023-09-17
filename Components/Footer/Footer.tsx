import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__activeLink'>
        <Link className='footer__link' href={"/"}>
          Feed
        </Link>
      </div>
      <div className='footer__activeLink'>
        <Link className='footer__link' href={"/explore"}>
          explore
        </Link>
      </div>
      <div className='footer__inactiveLink'>Saved</div>
      <div className='footer__inactiveLink'>
        <Link className='footer__link' href={"/figma"}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Footer;
