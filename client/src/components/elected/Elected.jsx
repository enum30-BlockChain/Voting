import React from "react";

const Elected = () => {
  const handleOnclick = (e) => {};
  return (
    <>
      <div>당선자페이지</div>
      <div className="candidatenumber">순번</div>
      <div className="candidatename">후보명</div>
      <button onClick={handleOnclick}>당선조회</button>
    </>
  );
};

export default Elected;
