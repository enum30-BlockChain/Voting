const  Web3 = require("web3");
const fs = require("fs");

// ABI : 로우레벨로 컴파일된 인터페이스
// 작성했던 코드들이 컴파일되서 나오는 것
const ABI = JSON.parse(//JSON형태로 되어있어서 JSON형태로 표현하기위함
  fs.readFileSync("./contracts_votingenum_sol_VotingEnum30.abi").toString()
);

// 바이트코드 : EVM 에서 실행하는 코드
const BYTECODE = fs
  .readFileSync("./contracts_votingenum_sol_VotingEnum30.bin")
  .toString();

// 노드의 JSON-RPC server와 연결 가나슈라는 RPC 통해서 연결??
const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");



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


const deployVotingEnum30 = async () => {
  await getAccounts();  // account 불러오기
  const votingEnum30Contract = await sendDeployContract(ABI, BYTECODE); // contract 배포
  console.log(votingEnum30Contract);
}

deployVotingEnum30();



// const testContract = new web3.eth.Contract(ABI).methods
