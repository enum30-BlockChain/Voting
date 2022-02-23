import { useState } from "react";
// import addCandidateMethod from "../../votingContract/addCandidate.js";

function Candidate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleOnClick = () => {
    // addCandidateMethod(name, age)
  };

  return (
    <>
      <div>후보자 페이지</div>
      <div className="input-container">
        <div className="input-name">
          <h2>이름</h2>
          <input type="text" onChange={handleOnNameChange}></input>
        </div>
      </div>
      <div className="input-container">
        <div className="input-age">
          <h2>나이</h2>
          <input type="number" onChange={handleOnAgeChange}></input>
        </div>
      </div>
      <button onClick={handleOnClick}>등록</button>
    </>
  );
}

export default Candidate;
