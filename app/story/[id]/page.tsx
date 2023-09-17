import Link from "next/link";
import { GiBackwardTime } from "react-icons/gi";

type props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: props) {
  const { id } = params;

  // const

  return (
    <div>
      <h1>page about STORY details</h1>
      <p>creating .....</p>
      <p>paramss {id}</p>

      <div>
        <Link className='btn-back' href='/'>
          <GiBackwardTime />
        </Link>
      </div>
    </div>
  );
}
