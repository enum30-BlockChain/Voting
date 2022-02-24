import { useEffect, useState } from "react";
import CandidateVote from "./CandidateVote";
import "../votePage/css/voter.css";
import { Link } from "react-router-dom";
import VotingMethods from "../../votingContract/votingContract";

function Voter() {
  const [count, setCount] = useState(0);
  const [candidates, setCandidates] = useState([
    "철순",
    "진영",
    "해민",
    "석훈",
    "진황",
  ]);

  useEffect(async () => {
    const candidates = await VotingMethods.getCandidateList();
    setCandidates(candidates);
  }, []);

  const [seleted, setSeleted] = useState();

  const handleOnclick = (e) => {
    if (candidates[seleted] !== 0) {
      const selectedCandidate = candidates[seleted];
      alert(selectedCandidate[0] + "투표하였습니다.");
      VotingMethods.voting(seleted);
      setCount(selectedCandidate[3]);
      console.log(selectedCandidate);
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
          name={candidate[0]}
          count={candidate[3]}
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
