import React from "react";
import { Histories_Type } from "@/utils/getHistoryData_ServerSide";
import Image from "next/image";
import HereIm from "@/public/moon.jpeg";
export type history = Histories_Type["histories"][0];

const History = ({ id, details }: history) => {
  return (
    <div className={`history`}>
      <div className='history__imageBox'>
        <Image
          className='history__imageBox__image'
          alt='image developer of this page :) '
          width={500}
          height={500}
          src={HereIm}
        />
      </div>
      <div className='history__textBox'>
        {/* <h5 className='history__header'>{id}</h5> */}
        <p className='history__text'>
          {details.length < 25 ? details : details.substring(0, 44) + "..."}
        </p>
      </div>
    </div>
  );
};

export default History;
