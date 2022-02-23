import Web3 from "web3";
import { gas, gasPrice } from "./config";
import votingContractInfo from "./votingContract.json";

const ABI = votingContractInfo.abi;
const contractAddress = votingContractInfo.contractAddress;

const provider = window.ethereum;
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(ABI, contractAddress);

export default class VotingMethods {
  static addCandidate = async (_name, _age) => {
    const selectedAccount = await web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);
    contract.methods
      .addCandidate(_name, _age)
      .send({ from: selectedAccount, gas, gasPrice })
      .then(console.log);
  };

  static voting = async (_candidateName) => {
    const selectedAccount = await web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);
    contract.methods
      .voting(_candidateName)
      .send({ from: selectedAccount, gas, gasPrice })
      .then(console.log);
  };
}
