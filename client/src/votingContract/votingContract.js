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
    // 현재 선택된 내 지갑 주소 불러오기 
    const selectedAccount = await web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);

    // addCandidate 함수 트랜잭션으로 보내기
    contract.methods
      .addCandidate(_name, _age)
      .send({ from: selectedAccount, gas: gas, gasPrice: gasPrice })
      .then(console.log);
  };

  static voting = async (_candidateName) => {
    // 현재 선택된 내 지갑 주소 불러오기 
    const selectedAccount = await web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);

    // addCandidate 함수 트랜잭션으로 보내기
    contract.methods
      .voting(_candidateName)
      .send({ from: selectedAccount, gas, gasPrice })
      .then(console.log);
  };
  
  static getCandidateList = async () => {
    contract.methods.getCandidateList().call().then(console.log);
  }

  static resetVoting = async () => {
    // 현재 선택된 내 지갑 주소 불러오기 
    const selectedAccount = await web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);

    contract.methods
      .resetVoting()
      .send({ from: selectedAccount, gas, gasPrice })
      .then(console.log);
  }
}
