import { useEffect } from "react";
import { Link } from "react-router-dom";
import CandidateInfo from "./CandidateInfo";

export { default as Candidate } from "../candidatesPage/Candidate";
export { default as Voter } from "../votePage/Voter";
export { default as Elected } from "../elected/Elected";

const MainLayout = (e) => {
  const candidateList = [];
  useEffect(() => {
    console.log("투표소에 도착했습니다.");
  }, [e]);

  return (
    <>
      <div className="menu">
        <Link to="/candidate">
          <button>candidate</button>
        </Link>
        <Link to="/vote">
          <button>vote</button>
        </Link>
        <Link to="/elected">
          <button>Eleted</button>
        </Link>
      </div>

      <div>메인페이지입니다.</div>
      <div className="candidateList-container">
        {candidateList.forEach((candidate) => (
          <CandidateInfo info={candidate} />
        ))}
      </div>
    </>
  );
};

export default MainLayout;
