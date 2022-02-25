import { useEffect, useState } from "react";
import CandidateInfo from "./CandidateInfo";

import * as React from "react";

export { default as Candidate } from "../candidatesPage/Candidate";
export { default as Voter } from "../votePage/Voter";
export { default as Elected } from "../elected/Elected";

const MainLayout = () => {
  const [candidateList, setCandidateList] = useState([]);
  useEffect(() => {
    console.log("투표소에 도착했습니다.");
  }, []);

  return (
    <>
      <div className="menu"></div>
      <div className="candidateList-container">
        {candidateList.forEach((candidate) => (
          <CandidateInfo info={candidate} />
        ))}
      </div>
    </>
  );
};

export default MainLayout;
