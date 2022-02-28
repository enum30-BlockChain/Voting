# Enum30
> 프로젝트 기간 : 22.02.18~02.25

## 팀원
- [전진영 (Jeon, Jinyoung)](https://github.com/jeonjinoung)      : Vote 페이지구성, solidity voting function 기능 Router or Link connect and solidity contract 배포 and image 삽입
- [임철순 (Lim,Cheolsoon)](https://github.com/POcodingWER)       : candidate 페이지구성, solidity {addCandidate,getCandidateList}함수구현
- [윤석훈 (Yoon, SeokHun)](https://github.com/imysh578)          : solidity 병합, 페이지 세션구분, 총괄
- [박해민 (Park, HaeMin)](https://github.com/euphratesriver0216) : React, Router , css
![image](https://user-images.githubusercontent.com/33863016/155632074-b52f2037-2c41-495a-a327-7557573bf194.png)
<br>


# 1. 기획 의도
- 여러노드들의 블록체인 트랜잭션 공유 및 Gas or Eth를 사용한 암호 및 보안
<br>

# 2. 프로젝트 목표
1. 후보자 등록(금액 소모), 최대 5명
2. 5명이 차야 투표 시작
3. 모두에게 투표권은 한 표씩
4. 특정 득표수 이상 받으면 투표 종료
- ~~4. 등록된 후보 이름으로 크립토 좀비나 크립토 키티 이미지 출력~~
<br>


# 3. 페이지 구성
| 페이지 | 설명 |
| --- | --- |
| **Main** | 메인페이지 각 페이지 링크를 통하여 연결 |
| **AddCandidate** | 후보자등록(새로운 후보자 등록) |
| **Elected** | 당선자페이지 각 후보들중 최다투표를 받은 후보자 보여짐 |
| **Landing** | 상단 메뉴바 페이지 |
| **voteDonePage** | 투표자 완료 페이지(투표자가 3명이 넘으면 더이상 투표안되고 당선자가 결정됨) |
| **votePage** | 투표페이지 (각 노드들은 투표개수를 1개씩 가지고있고 투표가 완료되면 다시 투표를 할 수 없다.)|

# Structure Chart
![image](https://user-images.githubusercontent.com/89626182/155558558-bac913d7-f8dd-4e80-902d-d30ae8b0131f.png)
<br>

# 4. 개발 환경
## 4-1. 🛠 Tools
### 📢 For Team Communication
- `Discord` => 조원들 화면공유 및 대화 소통
- `Github` => Issues[open, close] / Projects(memo) / 각 조원 code share and merge
### ⚙ For Development
- `Cmd git` => cmd창을 이용한 git hub code communication (git add . git commit -m "내용", git checkout 내가이동할곳, git pull, git push, git merge 내가 가져올곳)
- `VScode` => develop program
- `Remix.ethereum` => solidity develope program tool
- `Ganache` => transaction test tool 
- `MetaMask`=> solidity develop view and smart constract address / Ropsten network
<br>

## 4-2. 📚 Languages & Frameworks
### Front-end
- `React`
- `Javascript`
### Back-end
- `NodeJS`
- `Solidity`
<br>

## 4-3. 🛒 Library
### server
- `express`         : @4.17

### web3
- `web3`           : @0.24 <= "assert",
    "buffer","crypto-browserify","https-browserify","os-browserify","process","react-app-rewired",
    "stream-browserify","stream-http","url""

### router
- `react-router-dom`: @6

### design
- `mui`             : @5.2
<br>

# 5. Build Flow Chart
![image](https://user-images.githubusercontent.com/89626182/155558060-4b576ae3-5e0f-495c-b315-c7f484b32bad.png)



