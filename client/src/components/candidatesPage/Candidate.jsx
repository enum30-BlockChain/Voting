import { useEffect, useState } from "react";
import VotingMethods from "../../votingContract/votingContract";
import one from "./image/one.jpg";
import two from "./image/two.jpg";
import three from "./image/three.jpg";
import four from "./image/four.jpg";
import five from "./image/five.jpg";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import "./Candidate.css";
import CandidateCard from "./CandidateCard";

function Candidate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [number, setnumber] = useState(1);
  const [cadidate, setcadidate] = useState([]);
  const [voterAddress, setvoterAddress] = useState("");
  const [image, setImage] = useState([one, two, three, four, five]);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const voterAddressOverlap = async () => {
    for (let i = 0; i < cadidate.length; i++) {
      console.log(cadidate[i].account);
      console.log(voterAddress);
      if (cadidate[i].account === voterAddress) {
        return false;
      }
    }
    return true;
  };

  const handleOnClick = async () => {
    if ((await voterAddressOverlap()) === false) {
      return alert("후보자가 중복됩니다.");
    } else {
      if (number <= 5) {
        VotingMethods.addCandidate(name, age);
        setnumber(number + 1);
        setAge("");
        setName("");
        setImage("");
        console.log("후보자가 등록됩니다.");
      } else {
        return alert("5명이 넘어가요");
      }
    }
  };
  const Transaction = async () => {
    await VotingMethods.addCandidate(name, age);
  };

  useEffect(() => {
    const init = async () => {
      setcadidate(await VotingMethods.getCandidateList());
      setvoterAddress(await VotingMethods.getSeletedAccount());
    }
    init();
  }, []);

  return (
		<div className="candidate-component">
      <div className="add-form">
        <h1>후보자 등록 페이지</h1>
        <div className="input-container">
          <div className="input-name">
            <h2>이름</h2>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              type="text"
              placeholder="이름"
              value={name}
              onChange={handleOnNameChange}
            />
          </div>
          <div className="input-age">
            <h2>나이</h2>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              type="number"
              placeholder="나이"
              value={age}
              onChange={handleOnAgeChange}
            />
          </div>
        </div>
      </div>
      <div className="button-group">
        <Button variant="contained" onClick={handleOnClick}>클라이언트등록 유효성검사</Button>
        <Button variant="contained" onClick={Transaction}>트렌젝션으로 바로보내기</Button>
      </div>
      <div className="candidateList-container">
        <h3>후보자리스트</h3>
        <div className="candidateCard-wrap">
          {cadidate.map((a, i) => (
            <CandidateCard
              key={i}
              index={i}
              name={cadidate[i].name}
              age={cadidate[i].age}
              account={cadidate[i].account}
              image={image}
            />
          ))}
        </div>
      </div>
		</div>
	);
}


export default Candidate;
