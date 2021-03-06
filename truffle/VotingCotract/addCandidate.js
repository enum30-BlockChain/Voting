const Web3 = require("web3");
const fs = require("fs");

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

module.exports = addCandidateMethod;