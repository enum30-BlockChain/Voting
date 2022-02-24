import React, { useEffect, useState } from "react";
import VotingMethods from "votingContract/votingContract";

function VoteDonePage() {
  const [selectedAccounts, setSelectedAccounts] = useState([]);

  useEffect(async () => {
    const selectedAccount = await VotingMethods.getDoneVoterList();
    setSelectedAccounts(selectedAccount);
  }, []);

  return (
    <div>
      <h2>투표완료자 목록</h2>
      {selectedAccounts.map((selectedAccount, i) => {
        return (
          <ul>
            <li>{selectedAccount}</li>
          </ul>
        );
      })}
    </div>
  );
}
export default VoteDonePage;
