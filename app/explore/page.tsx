import Launch from "@/Components/Launch/Launch";
import LoadMoreLunches from "@/Components/LoadMore/LoadMoreLunches";
import NavigationExplore from "@/Components/Navigation/NavigationExplore";
import Search from "@/Components/Search/Search";
import { getData_ServerSide } from "@/utils/getData_ServerSide";
import React from "react";

const page = async () => {
  const launches = await getData_ServerSide.launches({ limit: 4, offset: 0 });
  const imagesFist = launches.filter((e) => e.links.flickr_images.length > 0);

  return (
    <div className='explore'>
      <div className='explore__header'>
        <Search />
        <NavigationExplore />
      </div>
      <div className='container__launch'>
        {launches.map((e) => (
          <Launch
            mission_name={e.mission_name}
            links={e.links}
            id={e.id}
            launch_date_utc={e.launch_date_utc}
            details={e.details}
          />
        ))}
        <LoadMoreLunches />
      </div>
    </div>
  );
};

export default page;
