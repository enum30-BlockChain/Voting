import getWeb3 from "getWeb3";
import votingContractInfo from "./votingContract/votingContract.json";

const deploy = async () => {
  const ABI = votingContractInfo.abi;
  const BYTECODE = votingContractInfo.bytecode;
  let selectedAccount;
  const web3 = await getWeb3();
  await web3.eth.getAccounts().then((accounts) => {
    selectedAccount = accounts[0];
  });
  new web3.eth.Contract(ABI)
    .deploy({ data: BYTECODE })
    .send({ from: selectedAccount, gas: 1500000, gaPrice: 300000000000 })
    .then((data) => {
      console.log(`data : ${data}`);
    })
};

export default deploy;
