import Web3 from "web3";
import fs from "fs";

const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");

const votingABI = JSON.parse(
	fs.readFileSync("./voting.abi").toString()
);

const votingContractAddress = fs.readFileSync("./votingContractAddress.txt").toString();
// console.log(votingContractAddress);


const addCandidateMethod = async (name, age) => {
  const currentAddress = await web3.eth.getAccounts().then(accounts=>accounts[0]);
  const votingContract = new web3.eth.Contract(votingABI, votingContractAddress);
  votingContract.methods
		.addCandidate(name, age)
		.send({ from: currentAddress, gas: 1500000, gasPrice: 300000000000 })
    .then(console.log)
};

addCandidateMethod("석훈", 32);



// web3.eth.getAccounts().then((accounts) => {
//     accounts.forEach((account) => {
//       accountAddressList.push(account);
//     })
//     const contract = new web3.eth.Contract(ABI, "0xAfBE55deA4d31e06B26E95a3E039564835704Abc")
//     contract.methods
//       .addCandidate("아라", 1)
//       .send({ from: accountAddressList[0], gas: 1500000, gasPrice: 300000000000 })
//       // .then(console.log);
//     contract.methods.test().call().then(data => {console.log(data); console.log(data.length) })
//   }
// );