import { useEffect } from "react";
import { Link } from "react-router-dom";
import CandidateInfo from "./CandidateInfo";

export { default as Candidate } from "../candidatesPage/Candidate";
export { default as Voter } from "../votePage/Voter";

const MainLayout = (e) => {
  const candidateList = [];
  useEffect(() => {
    console.log("투표소에 도착했습니다.");
  }, [e]);

  return (
    <>
      <div>메인페이지입니다.</div>
      <div className="candidateList-container">
        {candidateList.forEach((candidate) => (
          <CandidateInfo info={candidate} />
        ))}
      </div>

      <Link to="/candidate">
        <button>후보자등록페이지이동</button>
      </Link>
      <Link to="/vote">
        <button>후보자등록페이지이동</button>
      </Link>
    </>
  );
};

export default MainLayout;
