import Image from "next/image";
import styles from "./page.module.css";
import { getClient } from "@/utils/getClient";
import { gql } from "@apollo/client";

const query = gql`
  query Histories {
    histories {
      details
    }
  }
`;

type histories = {
  histories: [
    {
      details: string;
    }
  ];
};

// export const revalidate = 5;

export default async function Home() {
  const data = await getClient().query({ query });
  const { histories }: histories = data.data;

  return (
    <div>
      <h1>hello</h1>
      <div>
        {histories.map((e) => {
          return <p> {e.details}</p>;
        })}
      </div>
    </div>
  );
}
