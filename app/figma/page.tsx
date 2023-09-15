import Image from "next/image";
import React from "react";
import figma from "@/public/figma.png";
const page = () => {
  return (
    <div>
      <Image src={figma} alt='figma' width={1369} height={969} />
    </div>
  );
};

export default page;
