import React from "react";

export type history = {
  id: string;
  details: string;
};

const History = ({ id, details }: history) => {
  return (
    <div className={`history `}>
      <h5 className='history__header'>{id}</h5>
      <p className='history__text'>{details}</p>
    </div>
  );
};

export default History;
