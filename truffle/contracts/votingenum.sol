// SPDX-License-Identifier: Enum30
pragma solidity >=0.5.0 <0.9.0;

contract VotingEnum30{
  uint addCandidateFee = 0.01 ether;

  // 당선될 투표 수 설정 => 기본값 3
  uint defaultVoteCountToWin = 3;
  uint voteCountToWin = defaultVoteCountToWin;

  address owner;

  event voted(address indexed voterAccount);

  // 투표 상태 변수들
  enum VotingState {
    CONTINUE,
    FINISHED
  }

  // 투표 활성화 상태 설정 => 기본값 : CONTINUE
  VotingState constant defaultVotingState = VotingState.CONTINUE;
  VotingState currentState = defaultVotingState;

  //후보자 신상정보 구조체
  struct Candidate {
    string name;
    uint8 age;
    address account;
    uint8 voteCounts;
  }
  // 맵핑을 통한 주소 
  // 유권자 => 투표권리
  // mapping (key => value) 매핑이름
  mapping (address => bool) hasVoteDone;

  // 후보자 번호 => 후보자 주소
  mapping (uint => address) candidateIndexToAddress;

  // 당선자
  Candidate private nullWinner = Candidate("", 0, address(0), 0);
  Candidate winner = nullWinner;

  // 처음 배포될 때만 실행되는 함수 
  constructor () {
    owner = msg.sender;
  }

  // 현재 컨트랙트의 잔액을 Owner에게 전송
  function withdraw() external onlyOwner {
    payable(owner).transfer(address(this).balance);
  }

  // 후보자 배열 (동적/정적 차이 확인하고 다시 선언하기)
  // => push 메서드는 동적배열에서만 사용 가능!
  Candidate[] private candidateList;      // 동적 배열

  // 투표를 완료한 사람의 주소를 모아두는 배열
  address[] private doneVoterList;

  // 후보자를 추가해주는 함수
  function addCandidate(string memory _name, uint8 _age) external payable hasVotingFinished {
    require(msg.value == addCandidateFee);
    require(candidateList.length < 5);          // 대선 후보자 수가 5명 이하인지 확인
    require(!hasDuplicates());                  // 대선 후보자 중복인지 확인
    candidateList.push(Candidate(_name, _age, msg.sender, 0)); // 대선 후보자 리스트에 새로운 후보자 추가
    uint index = candidateList.length - 1;
    candidateIndexToAddress[index] = msg.sender;
  }

  // 후보자 중복체크
  function hasDuplicates () view private returns (bool) {
    for (uint256 i = 0; i < candidateList.length; i++) {
      if (candidateList[i].account == msg.sender) {
        return true;
      }
    }
    return false;
  }
  
  // 투표자의 투표 여부 확인
  modifier voterRightCheck {
    require(!hasVoteDone[msg.sender]);
    _;
  }

  // 당선자 투표수 설정하는 함수
  function setVoteCountsToWin (uint _newVoteCountToWin) external onlyOwner {
    voteCountToWin = _newVoteCountToWin;
  }

  // 후보자에게 투표 
  function voting(uint _candidateIndex) external voterRightCheck hasVotingFinished { 
    candidateList[_candidateIndex].voteCounts++;  // 투표자가 후보자에게 투표를하면 후보자의 카운트 상승
    if(candidateList[_candidateIndex].voteCounts >= voteCountToWin) {
      currentState = VotingState.FINISHED;
      winner = candidateList[_candidateIndex];
    }
    doneVoterList.push(msg.sender);               // 투표 완료한 사람을 배열에 추가
    hasVoteDone[msg.sender] = true;               // 투표 완료 
    emit voted(msg.sender);
  }

  // 후보자 리스트 불러오기
  function getCandidateList () external view returns (Candidate[] memory){
    return candidateList;
  }

  // 투표 완료한 유권자 리스트 불러오기 
  function getDoneVoterList() external view returns (address[] memory){
    return doneVoterList;
  }

  // 투표를 마친 사람도 다시 투표권 주기
  function resetVoteRight() internal {
    for (uint256 i = 0; i < doneVoterList.length; i++) {
      hasVoteDone[doneVoterList[i]] = false;
    }
  }

  // 당선자 불러오기
  function getWinner() external view returns (Candidate memory){
    return winner;
  }

  // 컨트랙트 소유자인지 확인
  modifier onlyOwner {
    require(msg.sender == owner);
    _;
  }

  // 태초마을로 돌아가!
  function resetVoting () external onlyOwner {
    resetVoteRight();
    delete candidateList;
    delete doneVoterList;
    currentState = defaultVotingState;      // 투표 상태를 초기값으로 변경
    voteCountToWin = defaultVoteCountToWin; // 당선될 표 수를 초기값으로 변경
    winner = nullWinner;                    // 당선자를 초기값으로 변경
  }
  
  // 현재 투표 활성화 상태 체크
  modifier hasVotingFinished {
    require(currentState == VotingState.CONTINUE);  // CONTINUE 일때만 실행, 아니면 revert
    _;
  }

  // 투표 끝내기
  function finishVoting() external onlyOwner {
    currentState = VotingState.FINISHED; // 투표 상태를 끝내기로 변환
  }
}