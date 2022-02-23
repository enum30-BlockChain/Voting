import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    let provider;
    // Wait for loading completion
    window.addEventListener("load", async () => {
      // Modern dApps
      if (window.ethereum) {
        provider = window.ethereum;
        try {
          let selectedAccount;

          // Request account access if needed
          provider
            .request({ method: "eth_requestAccounts" })
            .then(accounts => {
              selectedAccount = accounts[0];
              console.log(`Selected Account is ${selectedAccount}`);
            })
            .catch(console.log);
          
          provider.on("accountsChanged", accounts => {
            selectedAccount = accounts[0];
            console.log(`Selected Account is ${selectedAccount}`);
          })
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dApps
      else if (window.web3) {
        // provider : mist/metamask
        console.log("Injected web3 detected");
      }
      // Injected web3 was not found
      // => Using local provider
      else {
        provider = new Web3.providers.HttpProvider("http://localhost:7545");
      }
      const web3 = new Web3(provider);
      resolve(web3);
    });
  });

export default getWeb3;