import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import connectWallet from "connectWallet";
// import CandidateInfo from "./CandidateInfo";

import "../mainPage/index.css";
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
  return <>hi</>;
};

export default MainLayout;
