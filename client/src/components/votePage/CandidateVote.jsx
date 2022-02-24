import { useState } from "react";
import "../votePage/css/candidateVote.css";

const CandidateVote = ({ id, name, count, setSeleted, ex }) => {
  const handleOnclick = (e) => {
    setSeleted(e.target.value);
    console.log(ex);
  };
  const [views, setViews] = useState();

  return (
    <>
      <div className="candidateVote-container">
        <div className="candidate-num">{id + "번"}</div>
        <div className="candidate-name">{name}</div>
        <div>
          <input
            type="radio"
            name="voted"
            value={id - 1}
            onClick={handleOnclick}
          />
        </div>
        <div className="candidate-count">{count}</div>
      </div>
      {/* {views.map((name, index) => (
        <Elected name={name} ex={2} />
      ))} */}
    </>
  );
};

export default CandidateVote;
