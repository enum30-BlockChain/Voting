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

function App() {
  useEffect(async () => {
    const web3 = getWeb3();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainLayout />}></Route>
          <Route path="/candidate" element={<Candidate methods={VotingMethods}/>} />
          <Route path="/vote" element={<Voter />} />
          <Route path="/elected" element={<Elected />} />
          <Route path="/voteDone" element={<VoteDonePage />} />
          <Route path="/deploy" element={<Deploy deploy={deploy} />} />
          <Route path="/test" element={<Test methods={VotingMethods} />} />
        </Route>
      </Routes>
    </>
  );
}

const Test = ({ methods }) => {
  const [candidateList, setCandidateList] = useState([]);

  useEffect(async () => {
    const getResult = await methods.getCandidateList();
    setCandidateList(getResult);
  }, [])
  
  
  const handleOnClickAdd = () => {
    VotingMethods.addCandidate("진영", 30);
  }

  const handleOnClickGet = () => {
    // methods.getCandidateList();
    console.log(candidateList);
  }
  const handleOnClickReset = () => {
    methods.resetVoting();
  }

  return (
    <>
      <h1>TEST</h1>
      <button onClick={handleOnClickAdd}>Add Candidate</button>
      <button onClick={handleOnClickGet}>Get Candidate List</button>
      <button onClick={handleOnClickReset}>Reset</button>
    </>
  )
}


export default App;
