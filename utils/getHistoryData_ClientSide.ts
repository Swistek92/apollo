"use client";
import config from "@/config/default";

type props = {
  limit: number;
  offset: number;
};

const getHistoryData_ClientSide = async ({ limit, offset }: props) => {
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

  return await reponse.json();

  // .then((res) => res.json())
  // .then((result) => {
  //   setData(result.data.histories);
  //   setLimit(limit + 1);
  // });
};

export default getHistoryData_ClientSide;
