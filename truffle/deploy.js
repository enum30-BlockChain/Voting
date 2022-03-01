const Web3 = require("web3");

// 노드의 JSON-RPC server와 연결 가나슈라는 RPC 통해서 연결??
const providerGanache = new Web3.providers.HttpProvider("http://127.0.0.1:7545");


const web3 = new Web3(providerGanache);

//가나슈에 있는 accounts address 담을 배열 선언
const accountAddressList = [];

const getAccounts = async () => {
  //가나슈에 있는 주소 불러오기 
  await web3.eth.getAccounts().then((accounts) =>
    accounts.forEach((account) => {
      accountAddressList.push(account);
    })
  );
}

const sendDeployContract = async (abi, bytecode) => {
  // 컴파일된 ABI를 이용해서 컨트랙트 불러옴  
  const contract = new web3.eth.Contract(abi);

  const deployedContract = await contract
    .deploy({ data: bytecode }) // 컨트랙트를 bytecode로 변환
    .send({ from: accountAddressList[0], gas: 1500000, gasPrice: 300000000000 }) // 바이트코드를 트랜잭션에 담아서 보냄
    .on("receipt", (receipt) => { // 트랜잭션에 대한 영수증을 반환(트랜잭션의 정보들을 가지고있음)
      console.log(receipt);
    });

  return deployedContract;
}

const deployContract = async (abi, bytecode) => {
  await getAccounts();  // account 불러오기
  const deployedContract = await sendDeployContract(abi, bytecode); // contract 배포
  return deployedContract;
}


module.exports = {deployContract};
