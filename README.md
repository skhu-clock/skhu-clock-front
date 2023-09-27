<br/>
<div align = "center">
    <h1> SKHU-CLOCK-FRONT</h1>
</div>

<br/>

## 📌 프로젝트 소개

<p>
    성공회대학교 재학생이 자주 이용하는 사이트를 모아놓은 사이트입니다.
</p>

</br>

## 📚 프로젝트 목적

<p style = "word-break: keep-all" >
   학교 홈페이지, 종합정보 시스템, LMS 등 학교에서 사용하는 많은 사이트들을 한 곳에 모아놓고, 학생들이 편하게 이용할 수 있도록 제작하였습니다.
</p>

</br>

## 📚 프로젝트 기간

![image](https://github.com/yeeZinu/yeeZinu/assets/33426203/8855782b-8d17-4e29-be24-85d1ac2fa4e0)


## 📚 프로젝트 기술 스택
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Emotion-EFD1EA?style=flat-square&logo=css3&logoColor=white"/>
<img alt="ESLint" src="https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
<img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
<img alt="Vercel" src="https://img.shields.io/badge/Vercel -000000?style=flat-square&logo=vercel&logoColor=white" />

</br>

## 📚 프로젝트 구조

```
public
├── images      // 이미지 파일들이 있는 폴더

src
├── components  // 컴포넌트들이 있는 폴더
    ├── Common          // 스켈레톤, List 컴포넌트
    ├── constants       
        ├── links.ts            // 사이트 링크 데이터
        └── page.ts             // 컴포넌트 데이터를 담은 객체

    ├── CurTime         // 현재 시간을 보여주는 컴포넌트
    ├── Linkpage        // 사이트 링크 컴포넌트
    ├── NoticeList      // 학사공지 컴포넌트
    ├── SubWayList      // 지하철데이터 컴포넌트
    ├── Weather         // 날씨데이터 컴포넌트
    ├── Restaurant      // 주변 식당 컴포넌트
    ├── Calender        // 학사일정 컴포넌트
    ├── BaseItem.tsx    // 폴더를 입력받아 뿌려주는 컴포넌트
    └── Baselink.tsx    // 링크 컴포넌트

├── hooks       // API를 받아오는 훅을 모은 폴더

├── pages       // 유저들에게 보여주는 페이지 폴더
    ├── api             // 폴더를 입력받아 뿌려주는 컴포넌트
        ├── KaKaoMap            // 카카오맵 API
        ├── notice              // 학사공지 API
        ├── schedule            // 학사일정 API
        ├── subway              // 지하철 API
        └── weather             // 날씨 API

    ├── _app.tsx        
    ├── _document.tsx   
    └── index.tsx       // 메인 페이지


├── styles      // 글로벌 스타일
    └── index.css       // 스타일
├── types       // API데이터를 받아온 후 타입을 지정해주는 폴더
    └── index.ts        // 타입

└── utils
```

</br>

## 📚 프로젝트 결과물

### 1 페이지
![image](https://github.com/yeeZinu/yeeZinu/assets/33426203/3c5003b3-b289-4f87-b831-fd1fe6557dc4)

### 2 페이지
![image](https://github.com/yeeZinu/yeeZinu/assets/33426203/f68303a3-7abc-4354-b0df-d68a0403514b)

### 3 페이지
![image](https://github.com/yeeZinu/yeeZinu/assets/33426203/f0dafb87-aa2d-40b4-9ca5-0f877142f1a1)

</br>

## 📚 프로젝트 팀원
| <img src="https://avatars.githubusercontent.com/u/59411107?v=4" width="150px" /> | <img src="https://avatars.githubusercontent.com/u/33426203?v=4" width="150px" /> |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
|                 [김효중](https://github.com/hanseulhee)                           |                     [이진우](https://github.com/yeeZinu)                         |