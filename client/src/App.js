import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout, { Candidate, Voter } from "./layout";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/Candidate" element={<Candidate />} />
        <Route path="/Voter" element={<Voter />} />
      </Routes>
    );
  }
}

export default App;
