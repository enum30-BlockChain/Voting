import { useState } from "react";
import Candidate from "components/candidatesPage/Candidate";

function Voter() {
  const [count, setcount] = useState(0);
  const [candidate, setcandidate] = useState(["철순", "진영", "해민", "석훈"]);

  return (
    <>
      <div>투표페이지</div>
      <div className="input-container">
        <th className="candidatenumber">후보번호</th>
        <tr className="candidatename">{candidate[0]}</tr>
        <tr className="candidatename">{candidate[1]}</tr>
        <tr className="candidatename">{candidate[2]}</tr>
        <tr className="candidatename">{candidate[3]}</tr>
        <th>
          <input type="checkbox" />
        </th>
        <th className="candidatecount">투표수 : {count}</th>

        <button id="increment" onClick={() => setcount(count + 1)}>
          투표
        </button>
      </div>
    </>
  );
}

export default Voter;
