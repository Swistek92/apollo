import { getData_ServerSide } from "@/utils/getData_ServerSide";
import Image from "next/image";

type props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: props) {
  const { id } = params;

  const {
    details,
    launch_date_utc,
    launch_success,
    links,
    mission_name,
    rocket,
  } = await getData_ServerSide.launch({ id });
  const { flickr_images } = links;
  const { rocket_name, rocket_type } = rocket;
  const rocket2 = rocket.rocket;
  const { active, name, wikipedia, company, country, mass } = rocket2;
  const { kg } = mass;
  return (
    <div className='launchDetails__container'>
      <div className='launchDetails__container__imagebox'>
        {flickr_images[0] && (
          <Image
            className='launchDetails__container__imagebox_img'
            src={flickr_images[0]}
            alt='img'
            width={200}
            height={200}
          />
        )}
      </div>
      <div>
        <p> details{details}</p>
        <p> launch date utc {launch_date_utc}</p>
        <p> success {launch_success ? "true" : "false"}</p>
        {/* <p> mission name{mission_name}</p>
        <p> details {details}</p>
        <p> rocket name {rocket_name}</p>
        <p> rocket type {rocket_type}</p>
        <p> rocket active: {active}</p>
        <p> name: {name}</p>
        <p> wiki; {wikipedia}</p>
        <p> company:{company}</p>
        <p> county:{country}</p>
        <p>kg{kg}</p> */}
      </div>
    </div>
  );
}
