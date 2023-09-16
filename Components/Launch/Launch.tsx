import React from "react";
import { Launches_Tpye } from "@/utils/Types";
import Image from "next/image";
import orzel7 from "@/public/orzel7.jpg";
export type Launch_Type = Launches_Tpye["launches"][0];
import Link from "next/link";
import { detectContentType } from "next/dist/server/image-optimizer";

const Launch = ({
  mission_name,
  links,
  id,
  launch_date_utc,
  details,
}: Launch_Type) => {
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
        <div className='launch__text'>
          <p className='launch__text__date'>
            {new Date(launch_date_utc).toLocaleString()}
          </p>
          <h5>{mission_name}</h5>
          <p>
            {details &&
              (details.length < 25
                ? details
                : details.substring(0, 44) + " ...")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Launch;
