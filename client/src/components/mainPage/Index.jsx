import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import connectWallet from "connectWallet";
import CandidateInfo from "./CandidateInfo";

import * as React from "react";
import { Button } from "@mui/material";
import getWeb3 from "getWeb3";

export { default as Candidate } from "../candidatesPage/Candidate";
export { default as Voter } from "../votePage/Voter";
export { default as Elected } from "../elected/Elected";

const MainLayout = () => {
  const [candidateList, setCandidateList] = useState([]);
  useEffect(() => {
    console.log("투표소에 도착했습니다.");
  }, []);

  const onClickConnectToWallet = () => {
    connectWallet();
    getWeb3();
  };
  return (
    <>
      <div className="menu"></div>
      <div className="candidateList-container">
        {candidateList.forEach((candidate) => (
          <CandidateInfo info={candidate} />
        ))}
      </div>
      <Button onClick={onClickConnectToWallet}>지갑 연결하기</Button>
    </>
  );
};

export default MainLayout;
