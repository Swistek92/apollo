import { gql } from "@apollo/client";
import { getClient } from "./getClient";
import { Histories_Type, Launches_Tpye } from "./Types";
type props = {
  limit: number;
  offset: number;
};

export const getData_ServerSide = {
  history: () => {},
  launch: () => {},

  histories: async ({ limit, offset }: props) => {
    const query = gql`
      query ExampleQuery($limit: Int, $offset: Int) {
        histories(limit: $limit, offset: $offset) {
          details
          id
        }
      }
    `;
    const respose = await getClient().query({
      query,
      variables: {
        limit,
        offset,
      },
    });
    const { histories }: Histories_Type = respose.data;

    return histories;
  },
  launches: async ({ limit, offset }: props) => {
    const query = gql`
      query Launches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
          mission_name
          links {
            flickr_images
          }
          id
        }
      }
    `;
    const respose = await getClient().query({
      query,
      variables: {
        limit,
        offset,
      },
    });
    const { launches }: Launches_Tpye = respose.data;

    return launches;
  },
};
