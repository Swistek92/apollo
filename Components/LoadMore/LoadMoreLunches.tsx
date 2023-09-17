"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import History, { history } from "../Hisotry/History";
import { Spinner } from "react-bootstrap";

import { getData_ClientSide } from "@/utils/getData_ClientSide";
import Launch, { Launch_Type } from "../Launch/Launch";

const LoadMoreLunches = () => {
  const [data2, setData] = useState<Launch_Type[]>([]);
  const [limit, setLimit] = useState(6);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreData = async () => {
    // DELAY@@@@
    await delay(100);
    const launches = await getData_ClientSide.launches({ limit, offset: 4 });
    setData(launches);

    setLimit(limit + 4);
  };

  useEffect(() => {
    if (inView) {
      loadMoreData();
      console.log("load");
    }
  }, [inView]);

  return (
    <>
      {data2 &&
        data2.map((e) => {
          return (
            <Launch
              key={e.mission_name}
              mission_name={e.mission_name}
              links={e.links}
              id={e.id}
              launch_date_utc={e.launch_date_utc}
              details={e.details}
            />
          );
        })}
      <br />
      <div className='container__spinner'>
        <Spinner className='spinner' ref={ref} />
      </div>
    </>
  );
};

export default LoadMoreLunches;
