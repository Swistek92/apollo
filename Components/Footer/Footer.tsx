import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Link href={"/"}>Feed</Link>
      </div>
      <div>
        <Link href={"/explore"}>explore</Link>
      </div>
      <div>Saved</div>
      <div>
        <Link href={"/figma"}>Profile</Link>
      </div>
    </div>
  );
};

export default Footer;
