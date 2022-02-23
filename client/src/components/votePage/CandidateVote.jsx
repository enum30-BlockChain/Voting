import React from "react";
import "./candidateVote.css";

const CandidateVote = ({ id, name, count, setSeleted }) => {
  const handleOnclick = (e) => {
    setSeleted(e.target.value);
  };

  return (
    <div className="candidateVote-container">
      <div className="candidate-num">{id}</div>
      <div className="candidatename">{name}</div>
      <div>
        <input
          type="radio"
          name="voted"
          value={id - 1}
          onClick={handleOnclick}
        />
      </div>
      <div className="candidatecount">{count}</div>
    </div>
  );
};

export default CandidateVote;
