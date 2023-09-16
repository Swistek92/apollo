import { gql } from "@apollo/client";
import { getClient } from "./getClient";
import { Histories_Type, Launches_Tpye, Lunch_Type } from "./Types";
type props = {
  limit: number;
  offset: number;
};

export const getData_ServerSide = {
  launch: async ({ id }: { id: string }) => {
    const query = gql`
      query Launches($launchId: ID!) {
        launch(id: $launchId) {
          details
          launch_date_utc
          launch_success

          links {
            flickr_images
          }
          mission_name
          rocket {
            rocket_name
            rocket_type
            rocket {
              active
              name
              wikipedia
              country
              company
              mass {
                kg
              }
            }
          }
          static_fire_date_utc
        }
      }
    `;
    const respose = await getClient().query({
      query,
      variables: {
        launchId: id,
      },
    });
    const { launch }: Lunch_Type = respose.data;

    return launch;
  },

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
          launch_date_utc
          details
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
