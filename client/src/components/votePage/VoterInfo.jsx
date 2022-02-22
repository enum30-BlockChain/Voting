function VoterInfo() {
  return (
    <>
      <div>polling place</div>
      <div>
        <th>
          <div className="number"></div>
        </th>
        <th>
          <div className="candidate"></div>
        </th>
        <th>
          <div className="candidateCount"></div>
        </th>
        <th>
          <input type="checkbox" />
        </th>
      </div>
      <button>투표</button>
    </>
  );
}

export default VoterInfo;
