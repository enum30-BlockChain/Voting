import Candidate from "components/candidatesPage/Candidate";
import MainLayout from "components/mainPage/Index";
import Voter from "components/votePage/Voter";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import getWeb3 from "./getWeb3";

function App() {
  useEffect(async () => {
    const web3 = await getWeb3();
    const accountList = await web3.eth.getAccounts();
    console.log(accountList);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<MainLayout />}></Route>
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/vote" element={<Voter />} />
          {/* <Route path="/votedone" element={<VoteDonePage/>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
