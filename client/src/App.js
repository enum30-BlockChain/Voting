import Candidate from "components/candidatesPage/Candidate";
import Deploy from "components/deployPage/Deploy";
import MainLayout from "components/mainPage/Index";
import Voter from "components/votePage/Voter";
import deploy from "deploy";
import React, { useEffect } from "react";
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
          <Route index element={<MainLayout/>}></Route>
          <Route path="/candidate" element={<Candidate/>} />
          <Route path="/vote" element={<Voter/>} />
          <Route path="/deploy" element={<Deploy deploy={deploy}/>} />
          <Route path="/test" element={<Test methods ={VotingMethods}/>} />
        </Route>
      </Routes>
    </>
  );
}


const Test = ({methods}) => {
  useEffect(() => {
    methods.addCandidate("석훈", 32);
  }, [])
  
  return (
    <div>TEST</div>
  )
}


export default App;
