import fs from "fs";
import deployContract from "../deploy.js";

let ABI;
let contractAddress;

const deployVotingContract = async () => {
	// ABI : 로우레벨로 컴파일된 인터페이스
	// 작성했던 코드들이 컴파일되서 나오는 것
	const VotingABI = JSON.parse(
		//JSON형태로 되어있어서 JSON형태로 표현하기위함
		fs.readFileSync("../contracts_votingenum_sol_VotingEnum30.abi").toString()
	);

	// 바이트코드 : EVM 에서 실행하는 코드
	const VotingBYTECODE = fs
		.readFileSync("../contracts_votingenum_sol_VotingEnum30.bin")
		.toString();

	// 배포
	return await deployContract(VotingABI, VotingBYTECODE);
};

deployVotingContract().then((constractInfo) => {
	ABI = constractInfo._jsonInterface;
	contractAddress = constractInfo._address;
	console.log(ABI);
	console.log(contractAddress);
  fs.writeFileSync("voting.abi", JSON.stringify(ABI));
  fs.writeFileSync("votingContractAddress.txt", contractAddress);
});

// export default deployVotingContract;