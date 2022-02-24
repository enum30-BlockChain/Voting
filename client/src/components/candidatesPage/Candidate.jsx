import { useEffect, useState } from "react";
import VotingMethods from "../../votingContract/votingContract";

function Candidate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [number, setnumber] = useState(1);
  const [cadidate, setcadidate] = useState([]);
  const [voterAddress,setvoterAddress] = useState('');    
  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const voterAddressOverlap = async () => {
    for (let i = 0; i < cadidate.length; i++) {
      console.log(2222222222, cadidate[i].account);
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
        console.log("후보자가 등록됩니다.");
      } else {
        return alert("5명이 넘어가요");
      }
    }
  };
  const Transaction = async() => {
      await  VotingMethods.addCandidate(name,age);
  };

  useEffect(async () => {
    setcadidate(await VotingMethods.getCandidateList());
    setvoterAddress(await VotingMethods.getSeletedAccount());
  }, []);

  return (
    <>
      <div>후보자 페이지</div>
      <div className="input-container">
        <div className="input-name">
          <h2>이름</h2>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleOnNameChange}
          ></input>
        </div>
      </div>
      <div className="input-container">
        <div className="input-age">
          <h2>나이</h2>
          <input
            type="number"
            placeholder="나이"
            value={age}
            onChange={handleOnAgeChange}
          ></input>
        </div>
      </div>

      <button onClick={handleOnClick}>클라이언트등록 유효성검사</button>
      <button onClick={Transaction}>트렌젝션으로 바로보내기</button>
      <div>후보자리스트</div>
      {cadidate.map((a, i) => {
        return (
          <div key={i}>
            순서:{i} 이름:{cadidate[i].name}, 나이:{cadidate[i].age}, 등록자
            주소{cadidate[i].account}
          </div>
        );
      })}
    </>
  );
}

export default Candidate;
