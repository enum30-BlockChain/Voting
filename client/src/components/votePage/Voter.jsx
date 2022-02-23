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

  const handleOnclick = (e) => {
    setSeleted(e.target.value);
    if (candidates[seleted] !== 0) {
      alert(candidates[seleted] + "투표하였습니다.");
      console.log(candidates[setCount(e.target.value)]);
      console.log(count + 1);
    }
  };

  return (
    <>
      <div>투표페이지</div>
      <div className="input-container">
        <div className="candidatenumber">순번</div>
        <div className="candidatename">후보명</div>
        <div className="votepaper">투표용지</div>
        <div className="candidatecount">투표수</div>
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
