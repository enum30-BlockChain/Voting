import React, { useEffect, useState } from "react";
import VotingMethods from "votingContract/votingContract";

function VoteDonePage() {
  const [selectedAccount, setSelectedAccount] = useState([]);

  useEffect(async () => {
    const selectedAccount = await VotingMethods.getDoneVoterList();
    setSelectedAccount(selectedAccount);
  }, []);
  return (
    <div>
      <h2>투표완료자 목록</h2>
      <ul>
        <li>{selectedAccount[0]}</li>
        <li>{selectedAccount[1]}</li>
      </ul>
    </div>
  );
}
export default VoteDonePage;
