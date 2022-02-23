import { useState } from "react";

function Voter() {
  return (
    <>
      <div>투표자페이지</div>
      <div className="input-container">
        <div className="candidatename">후보자이름</div>
        <input typeof="checkbox">투표를하겠다.</input>
        <button>투표</button>
      </div>
    </>
  );
}

export default Voter;
