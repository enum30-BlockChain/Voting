import { useEffect, useState } from "react";
import CandidateVote from "./CandidateVote";
import "../votePage/css/voter.css";
import { Link } from "react-router-dom";
import VotingMethods from "../../votingContract/votingContract";

function Voter() {
  const [count, setCount] = useState([0, 0, 0, 0, 0]);
  const [candidates, setCandidates] = useState([
    "철순",
    "진영",
    "해민",
    "석훈",
    "진황",
  ]);

  useEffect(() => {
    VotingMethods.getCandidateList();
  }, []);

  const [seleted, setSeleted] = useState();

  const handleOnclick = (e) => {
    if (candidates[seleted] !== 0) {
      alert(candidates[seleted] + "투표하였습니다.");
      const count2 = [...count];
      count2[seleted] = count2[seleted] + 1;
      setCount(count2);
    }
  };

  return (
    <>
      <h1>투표페이지</h1>
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
          count={count[index]}
          setSeleted={setSeleted}
        />
      ))}

      <button id="votepaper" onClick={handleOnclick}>
        투표
      </button>
      <Link to="/elected">
        <button>당선확인</button>
      </Link>
    </>
  );
}

export default Voter;
