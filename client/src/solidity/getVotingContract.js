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

web3.eth.getAccounts().then((accounts) => {
    accounts.forEach((account) => {
      accountAddressList.push(account);
    })
    const contract = new web3.eth.Contract(ABI, "0xAfBE55deA4d31e06B26E95a3E039564835704Abc")
    contract.methods
      .addCandidate("아라", 1)
      .send({ from: accountAddressList[0], gas: 1500000, gasPrice: 300000000000 })
      // .then(console.log);
    contract.methods.test().call().then(data => {console.log(data); console.log(data.length) })
  }
);


