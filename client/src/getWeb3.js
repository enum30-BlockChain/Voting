import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    let provider;
    let currentChainId;
    // Wait for loading completion
    window.addEventListener("load", async () => {
      // Modern dApps
      if (window.ethereum) {
        provider = window.ethereum;
        try {
          let selectedAccount;

          // 연결된 지갑 리스트 요청
          provider
            .request({ method: "eth_requestAccounts" })
            .then((accounts) => {
              // 제일 첫번째 지갑이 현재 선택된 지갑이므로 그 주소만 출력
              selectedAccount = accounts[0];
              console.log(`Selected Account is ${selectedAccount}`);
            })
            .catch(console.log);

          // 현재 연결된 네트워크 요청
          provider.request({ method: "eth_chainId" }).then((chainId) => {
            // 연결된 네트워크 출력
            currentChainId = chainId;
            console.log(`Seleted Network is ${currentChainId}`);
          });

          // 선택한 지갑이 변경되면 바뀐 지갑 주소를 출력 1초 후 웹페이지 새로고침
          provider.on("accountsChanged", (accounts) => {
            selectedAccount = accounts[0];
            console.log(`Selected Account is ${selectedAccount}`);
            setTimeout(() => {
              window.location.reload();
            }, 300);
          });

          // 네트워크가 변경되면 1초 후 웹페이지 새로고침
          provider.on("chainChanged", (chainId) => {
            console.log(`Network changed from ${currentChainId} to ${chainId}`);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dApps
      else if (window.web3) {
        provider = window.web3;
        console.log("Injected web3 detected");
      }
      // Injected web3 was not found
      // => Using local provider
      else {
        // 로컬 네트워크에 연결
        provider = new Web3.providers.HttpProvider("http://localhost:7545");
      }
      const web3 = new Web3(provider);

      resolve(web3);
    });
  });

export default getWeb3;
