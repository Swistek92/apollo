import { getData_ServerSide } from "@/utils/getData_ServerSide";
import Image from "next/image";
import cosmo from "@/public/cosmo.jpg";
import Link from "next/link";
import { GiBackwardTime } from "react-icons/gi";

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
    <div className='launchDetails'>
      <div className='launchDetails__imagebox'>
        {flickr_images[0] ? (
          <Image
            className='launchDetails__imagebox__img'
            src={flickr_images[0]}
            alt='img'
            width={200}
            height={200}
          />
        ) : (
          <Image
            className='launchDetails__imagebox__img'
            src={cosmo}
            alt='img'
            width={200}
            height={200}
          />
        )}
      </div>
      <div className='launchDetails__data'>
        <h3>rocket name {rocket_name}</h3>
        {details && <p> {details}</p>}

        <table className='table table-hover table-active'>
          <tbody>
            {launch_date_utc && (
              <tr>
                <th scope='row'>Launch date</th>
                <td>{new Date(launch_date_utc).toLocaleString()}</td>
              </tr>
            )}
            {launch_success && (
              <tr>
                <th scope='row'>Launch Succes</th>
                <td>{`${launch_success.toString()}`}</td>
              </tr>
            )}
            {mission_name && (
              <tr>
                <th scope='row'>mission_name</th>
                <td>{mission_name}</td>
              </tr>
            )}
            {rocket_name && (
              <tr>
                <th scope='row'>rocket_name</th>
                <td>{rocket_name}</td>
              </tr>
            )}
            {rocket_type && (
              <tr>
                <th scope='row'>rocket_name</th>
                <td>{rocket_type}</td>
              </tr>
            )}{" "}
            {active && (
              <tr>
                <th scope='row'>rocket active</th>
                <td>{`${active.toString()}`}</td>
              </tr>
            )}
            {name && (
              <tr>
                <th scope='row'>name</th>
                <td>{name}</td>
              </tr>
            )}{" "}
            {wikipedia && (
              <tr>
                <th scope='row'>wiki</th>
                <td>
                  <a href={wikipedia} target='blank_'>
                    {" "}
                    wiki about {name} Click!
                  </a>
                </td>
              </tr>
            )}
            {company && (
              <tr>
                <th scope='row'>company</th>
                <td>{company}</td>
              </tr>
            )}{" "}
            {country && (
              <tr>
                <th scope='row'>country</th>
                <td>{country}</td>
              </tr>
            )}{" "}
            {kg && (
              <tr>
                <th scope='row'>Masss</th>
                <td>{kg}</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <Link className='btn-back' href='/explore'>
            <GiBackwardTime />
          </Link>
        </div>
      </div>
    </div>
  );
}
