import connectGanache from "connectGanache";
import connectWallet from "connectWallet";
import getWeb3 from "getWeb3";
import { useState } from "react";
import CandidateInfo from "./CandidateInfo";

export { default as Candidate } from "../candidatesPage/Candidate";
export { default as Voter } from "../votePage/Voter";

const MainLayout = () => {
  const [candidateList, setCandidateList] = useState([]);
  const onClickConnectToGanache = () => {
    connectGanache()
  }

  const onClickConnectToWallet = () => {
    connectWallet();
  }
  return (
    <>
      <div>메인페이지입니다.</div>
      <div className="candidateList-container">
        {candidateList.forEach((candidate) => (
          <CandidateInfo info={candidate} />
        ))}
      </div>
      
      <button>후보자등록페이지이동</button>
      <button>투표하로가기</button>
      <button onClick={onClickConnectToWallet}>지갑 연결하기</button>
      <button onClick={onClickConnectToGanache}>Ganache 연결하기</button>
    </>
  );
};

export default MainLayout;
