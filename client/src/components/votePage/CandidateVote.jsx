import "../votePage/css/candidateVote.css";

const CandidateVote = ({ id, name, count, setSeleted }) => {
  const handleOnclick = (e) => {
    setSeleted(e.target.value);
  };
  return (
    <div className="candidateVote-container">
      <div className="candidate-num">{id + "번"}</div>
      <div className="candidate-name">{name}</div>
      <div>
        <input
          type="radio"
          name="voted"
          value={id - 1}
          onClick={handleOnclick}
        />
      </div>
      <div className="candidate-count">{count}</div>
    </div>
  );
};

export default CandidateVote;
