"use client";
import {
  Histories_Type,
  Launches_Tpye,
} from "@/utils/getHistoryData_ServerSide";
import config from "@/config/default";

type props = {
  limit: number;
  offset: number;
};

export const getData_ClientSide = {
  history: async ({ limit, offset }: props) => {
    const reponse = await fetch(config.API_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query ExampleQuery($limit: Int, $offset: Int) {
       histories(limit: $limit, offset: $offset) {
            details
           id
        }
              }

      `,
        variables: {
          limit,
          offset,
        },
      }),
    });
    const data = await reponse.json();

    const { histories }: Histories_Type = data.data;

    return histories;
  },

  launches: async ({ limit, offset }: props) => {
    const reponse = await fetch(config.API_LINK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
       query Launches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
          mission_name
          links {
            flickr_images
          }
        }
      }

      `,
        variables: {
          limit,
          offset,
        },
      }),
    });
    const data = await reponse.json();

    const { launches }: Launches_Tpye = data.data;
    console.log(launches);

    return launches;
  },
};
