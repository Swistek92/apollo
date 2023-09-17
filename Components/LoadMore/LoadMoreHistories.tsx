"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import History, { history } from "../Hisotry/History";
import { Spinner } from "react-bootstrap";
// import getData_ClientSide from "@/utils/getHistoryData_ClientSide";
import { getData_ClientSide } from "@/utils/getData_ClientSide";
const LoadMoreHistories = () => {
  const [data2, setData] = useState<history[]>([]);
  const [limit, setLimit] = useState(5);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreData = async () => {
    // DELAY@@@@
    await delay(100);
    const histories = await getData_ClientSide.history({ limit, offset: 4 });
    setData(histories);
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
          return <History key={e.id} id={e.id} details={e.details} />;
        })}
      <div>
        <Spinner ref={ref} />
      </div>
    </div>
  );
};

export default LoadMoreHistories;
