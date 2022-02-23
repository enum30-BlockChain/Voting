import { resolve } from "url";
import Web3 from "web3";

const connectGanache = () => new Promise((resolve, reject) => {
  const provider = new Web3.providers.HttpProvider("http://localhost:7545")
  const web3 = new Web3(provider);
  web3.eth.getAccounts().then(console.log)
  resolve(web3);
})


export default connectGanache;