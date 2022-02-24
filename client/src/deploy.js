import getWeb3 from "getWeb3";
import votingContractInfo from "./votingContract/votingContract.json";

const gas = "2";  // Mwei
const gasPrice = "10";  //Gwei

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
		.send({
			from: selectedAccount,
			gas: web3.utils.toWei(gas, "Mwei"),
			gasPrice: web3.utils.toWei(gasPrice, "Gwei"),
		})
		.then((data) => {
			console.log(`data : ${data}`);
		});
};

export default deploy;
