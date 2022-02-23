import { useState } from "react";
import CandidateVote from "./CandidateVote";
import "./voter.css";

function Voter() {
  const [count, setCount] = useState(0);
  const [candidates, setCandidates] = useState([
    "철순",
    "진영",
    "해민",
    "석훈",
    "진황",
  ]);
  const [seleted, setSeleted] = useState("");

  //
  const handleOnclick = (e) => {
    setSeleted(e.target.value);
    alert(candidates[seleted] + "투표하였습니다.");
  };

  return (
    <>
      <div>투표페이지</div>
      <div className="input-container">
        <div className="candidatenumber">후보명</div>
        <div className="vote">투표권</div>
        <div className="votecount">투표수</div>
      </div>
      {candidates.map((candidate, index) => (
        <CandidateVote
          id={index + 1}
          key={index}
          name={candidate}
          count={count}
          setSeleted={setSeleted}
        />
      ))}

      <button id="votepaper" onClick={handleOnclick}>
        투표
      </button>
    </>
  );
}

export default Voter;
