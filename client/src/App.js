import Candidate from "components/candidatesPage/Candidate";
import Deploy from "components/deployPage/Deploy";
import Elected from "components/elected/Elected";
import MainLayout from "components/mainPage/Index";
import VoteDonePage from "components/voteDonePage/VoteDonePage";
import Voter from "components/votePage/Voter";
import deploy from "deploy";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import getWeb3 from "./getWeb3";
import VotingMethods from "./votingContract/votingContract.js";
import Appbar from "../src/components/landingPage/navbar.jsx";
import { Button, TextField } from "@mui/material";

function App() {
  useEffect(() => {
    getWeb3();
  }, []);

  return (
    <>
      <Appbar></Appbar>
      <Routes>
        <Route path="/">
          <Route index element={<MainLayout />}></Route>
          <Route
            path="/candidate"
            element={<Candidate methods={VotingMethods} />}
          />
          <Route path="/vote" element={<Voter />} />
          <Route path="/elected" element={<Elected />} />
          <Route path="/voteDone" element={<VoteDonePage />} />
          <Route path="/deploy" element={<Deploy deploy={deploy} />} />
          <Route path="/owner" element={<Owner />} />
        </Route>
      </Routes>
    </>
  );
}

const Owner = () => {
  const [candidateList, setCandidateList] = useState([]);
  const [num, setNum] = useState(3);
  useEffect(() => {
    const initFunc = async () => {
      const getResult = await VotingMethods.getCandidateList();
      setCandidateList(getResult);
  
  
      const myAccount = await VotingMethods.getSeletedAccount();
      console.log(`myAccount: ${myAccount}`);
    }
    initFunc();
  }, [])
  
  const handleOnChange = (e) => {
    setNum(e.target.value);
  }

  const handleOnClickGet = () => {
    VotingMethods.getCandidateList();
    // console.log(candidateList);
  };
  const handleOnClickReset = () => {
    VotingMethods.resetVoting();
  };
  const handleOnClickStop = () => {
    VotingMethods.finishVoting();
  };
  const handleOnClickSetVoteCountsToWin = () => {
    VotingMethods.setVoteCountsToWin(num);
    console.log(`당선 득표수 변경 : ${num}`);
  };

  return (
    <div className="owner-container">
      <h1>Owner Page</h1>
      <div className="owner-button-group">
        <Button variant="contained" onClick={handleOnClickGet}>Get Candidate List</Button>
        <Button variant="contained" onClick={handleOnClickReset}>Reset</Button>
        <Button variant="contained" onClick={handleOnClickStop}>Stop</Button>
        <TextField onChange={handleOnChange}/>
        <Button variant="contained" onClick={handleOnClickSetVoteCountsToWin}>Set Vote Count To win</Button>
      </div>
    </div>
  );
};

export default App;
