"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import History, { history } from "../Hisotry/History";
import { Spinner } from "react-bootstrap";
import getHistoryData_ClientSide from "@/utils/getHistoryData_ClientSide";
import { histories } from "@/utils/getHistoryData_ServerSide";
const LoadMore = () => {
  const [data2, setData] = useState<history[]>([]);
  const [limit, setLimit] = useState(5);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreData = async () => {

    // secure api from ddos
    await delay(2000);

    const reponse = await getHistoryData_ClientSide({ limit, offset: 4 });

    const { histories }: histories = reponse.data;

    setData(histories);

    console.log(limit);

    console.log("data lenght" + data2.length);
    
    setLimit(limit + 1);
  };

  useEffect(() => {
    if (inView) {
      loadMoreData();
    }
  }, [inView]);

  return (
    <div>
      {data2 &&
        data2.map((e) => {
          return (
            <div key={e.id}>
              <p>{limit}</p>
              <History id={e.id} details={e.details} />
            </div>
          );
        })}
      <Spinner ref={ref} />
    </div>
  );
};

export default LoadMore;
