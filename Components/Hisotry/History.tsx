import React from "react";

export type history = {
  id: string;
  details: string;
};

const History = ({ id, details }: history) => {
  return (
    <div className='history'>
      <h5>{id}</h5>
      <p>{details}</p>
    </div>
  );
};

export default History;
