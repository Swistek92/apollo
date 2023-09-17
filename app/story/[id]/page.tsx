import { getData_ServerSide } from "@/utils/getData_ServerSide";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import stars from "@/public/star_wars.webp";
import Image from "next/image";
type props = {
  params: {
    id: string;
  };
};

// details: string | null;
// event_date_utc: Date | null;
// links: {
//   article: string | null;
//   reddit: string | null;
//   wikipedia: string | null;
// }
// title: string | null;

export default async function Page({ params }: props) {
  const { id } = params;

  const { details, event_date_utc, links, title } =
    await getData_ServerSide.history({ id });
  const { reddit, wikipedia, article } = links;

  return (
    <div className='details'>
      <div className='details__imagebox'>
        <Image
          className='details__imagebox__img'
          src={stars}
          alt='img'
          width={200}
          height={200}
        />
      </div>
      <div className='details__data'>
        {title && <h3>{title}</h3>}
        {details && <p> {details}</p>}
        <table className='table table-hover table-active'>
          <tbody>
            {event_date_utc && (
              <tr>
                <th scope='row'>event date</th>
                <td>{new Date(event_date_utc).toLocaleString()}</td>
              </tr>
            )}
            {reddit && (
              <tr>
                <th scope='row'>wiredditki</th>
                <td>
                  <a href={reddit} target='blank_'>
                    {" "}
                    reddit about this story!
                  </a>
                </td>
              </tr>
            )}
            {wikipedia && (
              <tr>
                <th scope='row'>wiki</th>
                <td>
                  <a href={wikipedia} target='blank_'>
                    {" "}
                    wiki about this story!
                  </a>
                </td>
              </tr>
            )}
            {article && (
              <tr>
                <th scope='row'>article</th>
                <td>
                  <a href={article} target='blank_'>
                    {" "}
                    article about this story!
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <Link className='btn-back' href='/'>
          <RiArrowLeftLine />
        </Link>
      </div>
    </div>
  );
}
