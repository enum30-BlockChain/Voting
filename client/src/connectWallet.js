
const connectWallet = async () => {
  const provider = window.ethereum;
  let selectedAccount;

  if (provider) {
    try {
      provider.request({method: "eth_requestAccounts"}).then(accounts => {
        selectedAccount = accounts[0];
        console.log(`Selected Account : ${selectedAccount}`);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })

      
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Cannot find provider!");
  }
}

export default connectWallet;