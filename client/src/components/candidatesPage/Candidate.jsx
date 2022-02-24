import { useEffect, useState } from "react";
import VotingMethods from "../../votingContract/votingContract";

function Candidate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [number, setnumber] = useState(1);
  const [cadidate, setcadidate] = useState([]);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleOnClick = () => {
    // addCandidateMethod(name, age)
    if (number <= 5) {
      setnumber(number + 1);
      // cadidate.push({ num: number, name: name, age: age });
      VotingMethods.addCandidate(name,age);
      setAge("");
      setName("");
      // console.log(cadidate);
    } else {
      return alert("5명이 넘어가요");
    }
  };
  useEffect(() => {
    setcadidate(VotingMethods.getCandidateList());
    console.log(cadidate)
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

      <button onClick={handleOnClick}>등록</button>
      <div>후보자리스트</div>
      {/* {cadidate.map((a, i) => {
        return (
          <div>
            순서:{a.num} 이름:{a.name}, 나이:{cadidate[i].age}{" "}
          </div>
        );
      })} */}
    </>
  );
}

export default Candidate;
