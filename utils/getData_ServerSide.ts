import { gql } from "@apollo/client";
import { getClient } from "./getClient";
import {
  Hisotry_Type,
  Histories_Type,
  Launches_Tpye,
  Lunch_Type,
} from "./Types";
type propsForPagination = {
  limit: number;
  offset: number;
};

type propsForSingle = {
  id: string;
};

export const getData_ServerSide = {
  launch: async ({ id }: propsForSingle) => {
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

  history: async ({ id }: propsForSingle) => {
    const query = gql`
      query ExampleQuery($historyId: ID!) {
        history(id: $historyId) {
          details
          event_date_utc
          links {
            article
            reddit
            wikipedia
          }
          title
        }
      }
    `;
    const respose = await getClient().query({
      query,
      variables: {
        historyId: id,
      },
    });
    const { history }: Hisotry_Type = respose.data;

    return history;
  },

  histories: async ({ limit, offset }: propsForPagination) => {
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
  launches: async ({ limit, offset }: propsForPagination) => {
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
