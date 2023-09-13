import History from "@/Components/Hisotry/History";
import LoadMore from "@/Components/LoadMore/LoadMore";
import { getClient } from "@/utils/getClient";
import getHistoryData from "@/utils/getHistoryData_ServerSide";
import { gql } from "@apollo/client";
import Image from "next/image";
import img from "@/public/img.jpeg";
import Drone from "@/Components/Drone/Drone";
import Navigation from "@/Components/Navigation/Navigation";

// export const revalidate = 5;

export default async function Home() {
  const histories = await getHistoryData({ limit: 4, offset: 0 });

  return (
    <div className='container'>
      <div>
        <Navigation />
        <Drone />
        <div>
          {histories &&
            histories.map((history) => (
              <History
                key={history.id}
                id={history.id}
                details={history.details}
              />
            ))}
          {/* <LoadMore /> */}
        </div>
      </div>
    </div>
  );
}
