# ZERDA_FUR
React로 회원가입, 로그인, 투두리스트 구현한 웹 페이지
***

### 설치
1. Repository clone
2. yarn install
// zerda_sand 를 실행
// package.json 파일 25줄 수정 
```
"start": "env-cmd -f .env.sample react-scripts start"
```
3. yarn start

***
### 주요 기능
1. redux를 이용한 회원가입, 로그인
2. graphQl을 이용한 투두리스트 작성, 조회, 상태 변경

***
### 폴더 구조
```
┌── src
│   ├── assets →  이미지, 아이콘 같은 정적 파일들
│   ├── components → 재사용 컴포넌트
│   │   ├── (footer.js)
│   │   ├── (header.js)
│   │   └──  ...
│   ├── pages → 각 페이지마다 폴더 생성
│   │   ├── SignIn ── signIn.js → 로그인 화면
│   │   ├──  ...
│   │   └── index.js → 처음으로 보여지는 화면
│   ├── store → redux store
│   │   ├── feature → 기능단위로 나눈 리듀서
│   │   │   └──  ...Slice.js
│   │   └── store.js → 스토어, 리듀서 설정
│   ├── App.js → ApolloProvider
│   └── index.js → BrowserRouter
│
├── .env.sample → 실사용하는 .env.prod 샘플 파일
├── .env.prod → yarn start
├── .gitignore → 깃헙에 업로드 하지 않을 파일 설정
└── package.json → 설치된 라이브러리, yarn 설정
``` 
***

### 작성
  - **HaNa Kang** - <zerda@korea.ac.kr> / 23.01.25. 업데이트
