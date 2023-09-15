import { gql } from "@apollo/client";
import { getClient } from "./getClient";
type props = {
  limit: number;
  offset: number;
};

export type Histories_Type = {
  histories: [
    {
      details: string;
      id: string;
    }
  ];
};

export type Launches_Tpye = {
  launches: [
    {
      mission_name: string;
      links: {
        flickr_images: string[];
      };
    }
  ];
};

export const getData_ServerSide = {
  history: async ({ limit, offset }: props) => {
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
