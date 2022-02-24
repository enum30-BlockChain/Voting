// SPDX-License-Identifier: Enum30
pragma solidity >=0.5.0 <0.9.0;

contract VotingEnum30{
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
  mapping (address => bool) voterRight;

  // 후보자 주소 => Candidate List에서의 인덱스
  mapping (address => uint) candidateToIndex;

  // 선행적으로 실행해야할 
  constructor () {
    if(isValidVoter()){               // 이전 투표를 하지 않았다면
      voterRight[msg.sender] = true;  // 현재 사용자에게 투표권 부여
    }
  }

  // 후보자 배열 (동적/정적 차이 확인하고 다시 선언하기)
  // => push 메서드는 동적배열에서만 사용 가능!
  Candidate[] private candidateList;      // 동적 배열
  // Candidate[5] candidateList;  // 정적 배열
  uint[] testArr = [0,1,2,3,4];
  // 투표를 완료한 사람의 주소를 모아두는 배열
  address[] private doneVoterList;

  // 투표를 마친 사람인지 확인하는 함수
  function isValidVoter() view internal returns (bool) {
    // 배열에 현재 사용자 주소가 있는지 확인
    for (uint256 i = 0; i < doneVoterList.length; i++) {
      // 현사용자가 배열안에 있는지 비교
      if (doneVoterList[i] == msg.sender) {
        return false; // 같은순간 false 반환
      }
    }
    return true;  // 다르다면 true반환
  }

  // memory 쓰는 이유 스토리지 자체의 값을 바꿀수 있지만 가스 소비를 줄이기 위해 함수 안에서 사용하는 값은 메모리를 사용한다.
  // 후보자를 추가해주는 함수
  function addCandidate(string memory _name, uint8 _age) external {
    // TODO: 후보자 등록시 비용 발생
    require(candidateList.length < 5);          // 대선 후보자 수가 5명 이하인지 확인
    candidateList.push(Candidate(_name, _age, msg.sender, 0)); // 대선 후보자 리스트에 새로운 후보자 추가
    uint index = candidateList.length - 1;
    candidateToIndex[msg.sender] = index;
  }
  // 함수 이전에 선행으로
  // 투표자의 투표 여부 확인
  modifier voterRightCheck {
    require(voterRight[msg.sender]);
    _;
  }

  // 후보자에게 투표 
  function voting(address _candidateAccount) external voterRightCheck { 
    uint index = candidateToIndex[_candidateAccount]; // 투표 주소를 통해서 투표 id 찾기
    candidateList[index].voteCounts++;           // 투표자가 후보자에게 투표를하면 후보자의 카운트 상승
    doneVoterList.push(msg.sender);           // 투표 완료한 사람을 배열에 추가
    voterRight[msg.sender] = false;           // 투표 완료 
  }

  // 후보자 리스트 불러오기
  function getCandidateList () external view returns (Candidate[] memory){
    return candidateList;
  }

  // 투표 완료한 유권자 리스트 불러오기 
  function getDoneVoterList() external view returns (address[] memory){
    return doneVoterList;
  }

  // 태초마을로 돌아가!
  function resetVoting () external {
    delete candidateList;
    delete doneVoterList;
  }
}