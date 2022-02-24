import React, {useEffect, useState} from "react";
import VotingMethods from "../../votingContract/votingContract"
const Elected = () => {
  const [winner, setWinner] = useState([]);
  useEffect(() => {
    const excuteGetWinner = async () => {
      const result = await VotingMethods.getWinner();
      setWinner(result);
    }
    excuteGetWinner();
  }, []);

  const handleOnclick = (e) => {

  };
  if (winner[3] == 0 ) {
    return <>
      <h1>돌아가! 아직 투표 안끝났다!!</h1>
    </>
  } else {
    return (
      <>
        <div>당선자페이지</div>
        <div className="winnerinfo-container">
          <div className="winnerinfo-name">{winner[0]}</div>
          <div className="winnerinfo-age">{winner[1]}</div>
          <div className="winnerinfo-address">{winner[2]}</div>
          <div className="winnerinfo-votecounts">{winner[3]}</div>
        </div>
        <button onClick={handleOnclick}>당선조회</button>
      </>
    );
  }
};

export default Elected;
