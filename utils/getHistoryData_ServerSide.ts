import { gql } from "@apollo/client";
import { getClient } from "./getClient";
type props = {
  limit: number;
  offset: number;
};

export type histories = {
  histories: [
    {
      details: string;
      id: string;
    }
  ];
};

const query = gql`
  query ExampleQuery($limit: Int, $offset: Int) {
    histories(limit: $limit, offset: $offset) {
      details
      id
    }
  }
`;

const getHistoryData_ServerSide = async ({ limit, offset }: props) => {
  const respose = await getClient().query({
    query,
    variables: {
      limit,
      offset,
    },
  });
  const { histories }: histories = respose.data;

  return histories;
};

export default getHistoryData_ServerSide;
