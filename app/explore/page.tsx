import Launch from "@/Components/Launch/Launch";
import NavigationExplore from "@/Components/Navigation/NavigationExplore";
import Search from "@/Components/Search/Search";
import { getData_ServerSide } from "@/utils/getData_ServerSide";
import React from "react";

const page = async () => {
  const launches = await getData_ServerSide.launches({ limit: 100, offset: 0 });
  const imagesFist = launches.filter((e) => e.links.flickr_images.length > 0);

  return (
    <div className='explore'>
      <Search />
      <NavigationExplore />
      <div className='container__launch'>
        {launches.map((e) => (
          <Launch mission_name={e.mission_name} links={e.links} />
          // <div>
          //   <p>{e.mission_name}</p>
          //   <ul>
          //     {e.links.flickr_images.map((e) => (
          //       <p>{e}</p>
          //     ))}
          //   </ul>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default page;
