import React from "react";

export type history = {
  id: string;
  details: string;
};

const History = ({ id, details }: history) => {
  return (
    <div className={`history ${Math.random() < 0.5 ? "black" : "black"}`}>
      <h5>{id}</h5>
      <p>{details}</p>
    </div>
  );
};

export default History;
