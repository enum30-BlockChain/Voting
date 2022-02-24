import Web3 from "web3";
import { gas, gasPrice } from "./config";
import votingContractInfo from "./votingContract.json";

const ABI = votingContractInfo.abi;
const contractAddress = votingContractInfo.contractAddress;

const provider = window.ethereum;
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(ABI, contractAddress);

export default class VotingMethods {
  // 현재 선택된 내 지갑 주소 불러오기 
  static addCandidate = async (_name, _age) => {
    const selectedAccount = await web3.eth
      .getAccounts()
      .then((accounts) => accounts[0]);

    // addCandidate 함수 트랜잭션으로 보내기
    contract.methods
      .addCandidate(_name, _age)
      .send({ from: selectedAccount, gas: gas, gasPrice: gasPrice })
      .then(console.log);
  };

  // 
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
    let candidateList;
    await contract.methods.getCandidateList().call().then((candidates) => {
      console.log(`후보자 리스트 : ${candidates}`);
      candidateList = candidates;
    });
    return candidateList
  }

  static getDoneVoterList = async () => {
    let doneVoterList;
    await contract.methods.getDoneVoterList().call().then((doneVoters) => {
      console.log(`투표를 완료한 사람들 : ${doneVoters}`);
      doneVoterList = doneVoters;
    });
    return doneVoterList;
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
