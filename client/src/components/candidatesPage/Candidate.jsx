import { useState } from "react";
// import addCandidateMethod from "../../votingContract/addCandidate.js";

function Candidate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [number, setnumber] = useState(0);
  const [cadidate, setcadidate] = useState([name, age, number]);

  const handleOnNameChange = (e) => {
    setName(e.target.value);
  };
  const handleOnAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleOnClick = () => {
    // addCandidateMethod(name, age)
    setnumber(number + 1);
    const cadidate = [number, name, age];
    console.log(cadidate);
  };

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
            type="text"
            placeholder="나이"
            value={age}
            onChange={handleOnAgeChange}
          ></input>
        </div>
      </div>
      <button onClick={handleOnClick}>등록</button>
      <div>후보자리스트</div>
      <th>
        <tr></tr>
      </th>
    </>
  );
}

export default Candidate;
