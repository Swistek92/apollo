import History from "@/Components/Hisotry/History";
import { getClient } from "@/utils/getClient";
import { gql } from "@apollo/client";
import Image from "next/image";
import img from "@/public/img.jpeg";
import Drone from "@/Components/Drone/Drone";
import FeedHeader from "@/Components/Headers/FeedHeader";

import { getData_ServerSide } from "@/utils/getData_ServerSide";
import LoadMoreHistories from "@/Components/LoadMore/LoadMoreHistories";
import LoadMoreLunches from "@/Components/LoadMore/LoadMoreLunches";
import Footer from "@/Components/Footer/Footer";
// export const revalidate = 5;

export default async function Home() {
  const histories = await getData_ServerSide.histories({ limit: 4, offset: 0 });

  return (
    <div className='main_container'>
      <div>
        <FeedHeader />
        <Drone />
        <h3> top stories </h3>
        <div className='new_container'>
          {histories &&
            histories.map((history) => (
              <History
                key={history.id}
                id={history.id}
                details={history.details}
              />
            ))}
          <LoadMoreHistories />
        </div>
      </div>
    </div>
  );
}
