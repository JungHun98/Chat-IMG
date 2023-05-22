# Chat-IMG

<p align="center"><img src="./public/logo.svg" width="200px"></p>

> 개인프로젝트<br>
> 개발기간: 2023.04.01~

## 프로젝트 소개
이미지 묘사 텍스트를 입력받아 이미지를 생성하는 애플리케이션입니다.

해당 프로젝트는 Kakao Karlo API, PaPago API를 사용했습니다. Karlo 모델은 영어만을 지원하기 때문에 사용자가 입력한 한국어 텍스트를 Papago API를 통해 영어로 번역하여 이미지를 생성합니다.

따라서 동음이의어를 사용하실 경우 영어로 작성해주시면 더 정확한 결과를 얻을 수 있습니다.

ex) `밤 -> night`, `다리 -> bridge`

## 기술스택
### Front-End
<img src="https://img.shields.io/badge/react.js-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> 

<img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white">

### Back-End
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">

### Deploy

<img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white"><br>

<img src="https://img.shields.io/badge/cloudtype-005cc5?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nOWbuYoUURSGP8EFSh0ZH0HGQBh9ATHTdkAQDBw3cNpRYwNfwiURX8BMA2cmNXI0cEs08SGEMRcDbQ3GA8fqWu5Wt27d+qGCqq4693xfQ3ffAw1pZwX4Blztu5E+sgL8BP4Av4Er/bYTNxpejtFIOM88vBy/yFxCE3z2EkzgtYTVftrsJmcxh89SwnPs4LOTsAh8xl3C5fgt++c0MFHno5JwDvjB/Ce6r4QLcdr3i8DrxvVP3aO4S7gXhcAjZfiQEh4Ae2JAuKYOvknCl4b79fGQgcNrCdfUcyYSHpEJvIuE5OGXsIPXEq6rOlUSHpM4PEABfML9a61OQvLwurkj+Em4oWotAhdJHH4C7ABr6lpICUlHb2lnjExC1X5+BkzVPdlKqJrhjUZCE3z2EkzgtYRb6tnBS5hgP8bKSsKziqZMJayrOoOVsAB8bGkwOwlngEvqfFQSZFc3A+6q6wvAB8fGZ/w/1U1WQnlLG1LC/dJayUmo289XSXhv2XDdri4ZCW3DDB8JbcOM3iWYTnJcJJjO8HqTYDvGKks4TL0E2wFmdAnHcBtjmUhwHV1HlXAAeOu4WJMEG/hl4CtwU12LKuEg4SQcYnfTZAO/o2qtqdd8JRw37AHwl3DHZrF/WQa+V9SaqntcJWwCe20bKogn4STz8KEkOMFLCuCNxWIuEprgfSV4wUt8JdxuqH2Kdnhdy2aesEEAeEkXEkzeeVcJQeElBbBt2bBufL1U74lHrSYJL+kAXhJSQuh5wjvgBR3CSwrgdaDGQ0qImtASfIYqvc0FU5HwtDvE9vQtYQvY3yGfUUJLMB2qbAH7OiWzSGwJmyQELwkpoWmokiS8pGsJGyQML+lKwiDgJaElTBkQvCSkhMHGV8KJ+C2Hj6uETnd1sWMrISt4iamELOElbRKyhpfUSRgFvKQsYVTwkgJ4xe7/BnuB/wvmgmA+Os5ZUQAAAABJRU5ErkJggg==&logoColor=white"><br>

## 주요 기능
### :star: 사용자가 입력한 텍스트 번역
- Submit 버튼을 클릭하면 한국어로 입력된 텍스트를 백엔드에서 번역 후 이미지 생성

### :star: 번역된 텍스트를 바탕으로 이미지 생성
- 생성된 이미지는 웹 페이지에서 볼 수 있습니다

### :star: 이미지 다운로드
- 이미지를 생성하고 사용자가 원하는 크기(256~1024)로 다운로드 할 수 있습니다.

## 디렉토리 구조
```
Chat-IMG
├─ README.md
├─ index.js : node.js 서버
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
|  ├─ logo.svg
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ components
   │  ├─ Header.js
   │  ├─ ImageCreator.js
   │  ├─ ImageOption.js
   │  ├─ InitContent.js
   │  ├─ Main.js
   │  └─ TextContainer.js
   ├─ css
   │  ├─ Header.css
   │  ├─ ImageCreator.css
   │  ├─ ImageOption.css
   │  └─ TextContainer.css
   ├─ index.css
   ├─ index.js
   ├─ reportWebVitals.js
   └─ setupTests.js
```

## 설치 및 실행
이 저장소를 클론하고 다음 명령어를 입력하여 애플리케이션을 실행 할 수 있습니다.

### Clone
```
$ git clone https://github.com/JungHun98/Chat-IMG.git
```

### 서버 실행
```
$ node index.js 
```

### react 서버 실행
```
$ cd src
$ npm start 
```

⚠️ 해당 서비스는 Kakao Kalro API, Papago API의 APP KEY가 환경변수로 설정되어있어 별도의 APP KEY가 필요합니다.

루트 디렉토리(CHAT-IMG)에 `.env` 파일을 생성하시고 발급받은 APP KEY를 설정해 주십시오.

### Kalro API KEY
```
KARLO_API_KEY = YOUR_APPKEY
```

### Papago API KEY
```
CLIENT_ID = YOUR_APPKEY;
CLIENT_SECRET = YOUR_APPKEY;
```
