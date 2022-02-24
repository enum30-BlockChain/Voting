import React from "react";

const CandidateInfo = ({ info }) => {
  return (
    <div className="CandidateInfo-container">
      <div>{info.name}</div>
      <div>{info.counts}</div>
      <div>{info.age}</div>
    </div>
  );
};

export default CandidateInfo;
