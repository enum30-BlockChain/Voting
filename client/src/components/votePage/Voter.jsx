import { useState } from "react";

function Voter() {
  // const [Number, SetNumber] = useState[1,2,3,4,5];

  return (
    <>
      <div>투표페이지</div>
      <div className="input-container">
        <th className="candidatenumber">후보번호</th>
        <th className="candidatename">후보자이름</th>
        <th>
          <input type="checkbox" />
        </th>
        <button>투표</button>
      </div>
    </>
  );
}

export default Voter;
