import { useEffect, useState } from "react";
import CandidateVote from "./CandidateVote";
import "../votePage/css/voter.css";
import { Link } from "react-router-dom";
import VotingMethods from "../../votingContract/votingContract";
import one from "./image/one.jpg";
import two from "./image/two.jpg";
import three from "./image/three.jpg";
import four from "./image/four.jpg";
import five from "./image/five.jpg";
import Button from "@mui/material/Button";

function Voter() {
  const [count, setCount] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [image, setImage] = useState([one, two, three, four, five]);

  useEffect(() => {
    const init = async () => {
      const candidates = await VotingMethods.getCandidateList();
      setCandidates(candidates);
    };
    init();
  }, []);

  const [seleted, setSeleted] = useState();

  const handleOnclick = () => {
    if (candidates[seleted] !== 0) {
      const selectedCandidate = candidates[seleted];
      alert(selectedCandidate[0] + "투표하였습니다.");
      VotingMethods.voting(seleted);
      setCount(selectedCandidate[3]);
      // return console.log(selectedCandidate[3]);
    }
  };

  return (
    <div className="candidateVote-component">
      <h1>투표페이지</h1>
      <div className="button-group">
        <Button variant="contained" id="votepaper" onClick={handleOnclick}>
          투표
        </Button>
        <Link to="/elected">
          <Button variant="contained">당선 확인</Button>
        </Link>
      </div>
      <div className="candidateVote-container">
        {candidates.map((candidate, index) => (
          <CandidateVote
            index={index}
            key={index}
            name={candidate.name}
            age={candidate.age}
            account={candidate.account}
            count={candidate.voteCounts}
            image={image}
            setSeleted={setSeleted}
          />
        ))}
      </div>
    </div>
  );
}

export default Voter;
