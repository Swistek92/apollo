import React from "react";
import { Launches_Tpye } from "@/utils/Types";
import Image from "next/image";
import orzel7 from "@/public/orzel7.jpg";
export type Launch_Type = Launches_Tpye["launches"][0];
import Link from "next/link";

const Launch = ({ mission_name, links, id }: Launch_Type) => {
  console.log(mission_name, links, id);
  return (
    <Link href={`/launch/${id}`}>
      <div className={`launch `}>
        <div className='launch__imageBox'>
          <Image
            className='launch__imageBox__image'
            alt='sad'
            width={500}
            height={500}
            src={links.flickr_images[0] ? links.flickr_images[0] : orzel7}
          />
        </div>
        <div>
          <h3>{mission_name}</h3>
          <p>id {id}</p>
        </div>
      </div>
    </Link>
  );
};

export default Launch;
