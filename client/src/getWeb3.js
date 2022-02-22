import Web3 from "web3";


const getWeb3 = () => 
  new Promise ((resolve, reject) => {
    window.addEventListener("load", async () => {
      const web3 = new Web3(window.web3);
      console.log(web3);
    })
  })


export default getWeb3;