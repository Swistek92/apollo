import History from "@/Components/Hisotry/History";
import LoadMore from "@/Components/LoadMore/LoadMore";
import { getClient } from "@/utils/getClient";
import getHistoryData from "@/utils/getHistoryData_ServerSide";
import { gql } from "@apollo/client";

export const query = gql`
  query ExampleQuery($limit: Int, $offset: Int) {
    histories(limit: $limit, offset: $offset) {
      details
      id
    }
  }
`;

// export const revalidate = 5;

export default async function Home() {
  const histories = await getHistoryData({ limit: 4, offset: 0 });

  return (
    <div className='container'>
      <h1>hello</h1>
      <div>
        {histories &&
          histories.map((history) => (
            <History
              key={history.id}
              id={history.id}
              details={history.details}
            />
          ))}
        <LoadMore />
      </div>
    </div>
  );
}
