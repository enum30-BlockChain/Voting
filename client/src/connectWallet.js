import Web3 from "web3";

const connectWallet = async () => new Promise((resolve, reject) => {
  const provider = window.ethereum;
  let selectedAccount;
  let currentChainId;

  if (provider) {
    try {
      provider.request({method: "eth_requestAccounts"}).then(accounts => {
        selectedAccount = accounts[0];
        console.log(`Selected Account : ${selectedAccount}`);
      })

      provider.request({method: "eth_chainId"}).then(chainId => {
        currentChainId = chainId;
        console.log(`Selected Network : ${currentChainId}`);
      })

      provider.on("accountsChanged", (accounts) => {
        selectedAccount = accounts[0];
        console.log(`Selected Account changed : ${selectedAccount}`)
      })

      provider.on("accountsChanged", (chainId) => {
        currentChainId = chainId;
        console.log(`Selected Network changed : ${currentChainId}`)
      })
      
      const web3 = new Web3(provider);
      resolve(web3);
    } catch (error) {
      reject(error);
    }
  } else {
    console.log();
  }
})

export default connectWallet;