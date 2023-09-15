import React from "react";
import { Launches_Tpye } from "@/utils/getHistoryData_ServerSide";
import Image from "next/image";
import { type } from "os";
export type Launch_Type = Launches_Tpye["launches"][0];

const Launch = ({ mission_name, links }: Launch_Type) => {
  console.log(links);
  console.log(links.flickr_images.length > 0);
  if (links.flickr_images.length === 0) {
    return;
  }
  return (
    <div className={`launch `}>
      <h1>lalalal</h1>
      {mission_name}
      && (
      <Image
        alt='sad'
        width={1000}
        height={1000}
        src={links.flickr_images[0]}
      />
      )
    </div>
  );
};

export default Launch;
