import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import connectWallet from "connectWallet";
import CandidateInfo from "./CandidateInfo";

import * as React from "react";

export { default as Candidate } from "../candidatesPage/Candidate";
export { default as Voter } from "../votePage/Voter";
export { default as Elected } from "../elected/Elected";

const MainLayout = (e) => {
  const [candidateList, setCandidateList] = useState([]);
  useEffect(() => {
    console.log("투표소에 도착했습니다.");
  }, [e]);

  const onClickConnectToWallet = () => {
    connectWallet();
  };
  return (
    <>
      <div className="menu"></div>

      <div>메인페이지입니다.</div>
      <div className="candidateList-container">
        {candidateList.forEach((candidate) => (
          <CandidateInfo info={candidate} />
        ))}
      </div>

      <button>후보자등록페이지이동</button>
      <button>투표하로가기</button>
      <button onClick={onClickConnectToWallet}>지갑 연결하기</button>
    </>
  );
};

export default MainLayout;
