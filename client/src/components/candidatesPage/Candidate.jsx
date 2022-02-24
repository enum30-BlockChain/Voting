import { useEffect, useState } from "react";
import { useState } from "react";
import { Button, Box } from "@material-ui/core";
// import addCandidateMethod from "../../votingContract/addCandidate.js";

function Candidate(e) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [number, setnumber] = useState(1);
  const [candidate, setcandidate] = useState([]);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleOnCandidateChange = (e) => {
    setcandidate(e.target.value);
  };

  const handleOnClick = () => {
    // addCandidateMethod(name, age)
    setnumber(number + 1);
    candidate.push({ number: number, name: name, age: age });
    console.log(candidate);
  };

  // const handleOnNumChange = () => {
  //   if (candidate.number.length >= 5) {
  //     candidate.push({ number: number, name: name, age: age });
  //   } else {
  //     return alert("5명 이상의 후보는 등록이 불가합니다");
  //   }
  // };

  // const handleOnInput(el, maxlength) {
  //   if(el.value.length > maxlength)  {
  //     el.value
  //       = el.value.substr(0, maxlength);
  //   }
  // }

  return (
    <>
      <Box>
        <div>후보자 페이지</div>
        <div className="input-container">
          <div className="input-name">
            <h2>이름</h2>
            <input
              type="text"
              placeholder="이름"
              maxlength="4"
              value={name}
              onChange={handleOnNameChange}
            ></input>
          </div>
        </div>
        <div className="input-container">
          <div className="input-age">
            <h2>나이</h2>
            <input
              type="text"
              placeholder="나이"
              value={age}
              onChange={handleOnAgeChange}
            ></input>
          </div>
        </div>
        <Button weight="30px" onClick={handleOnClick}>
          등록
        </Button>
        <h3>후보자리스트</h3>
        <ul>
          {candidate.map((a) => (
            <box>
              <div>후보자 번호 : {a.number}</div>
              <div>후보자 이름 : {a.name}</div>
              <div>후보자 나이 : {a.age}</div>
            </box>
          ))}
        </ul>
      </Box>
    </>
  );
}

export default Candidate;
