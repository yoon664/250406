## 1. clsx

설치 :: npm i clsx

- 조건에 따라 여러 클래스를 추가할 수 있는 라이브러리
- 조건이 많아질 때 가독성이 좋음

---

## 2. Swiper

설치 :: npm i swiper

- 슬라이드 라이브러리
- 모듈 설치 후에 App.css에 관련 css 작성
- Swiperjs 사이트
  react에서 적용 안할 때는 core


---

## 3. react-router-dom

설치 :: npm i react-router-dom

- 새로고침 없이 페이지 이동하는 라이브러리

1. 꼭 index.js에 BrowserRouter 작성
<BrowserRouter>

2. 라우팅 설정은 App.js에 작성
<Routes>안에 라우트 작성

3. 라우트 태그 사용
<Route path="/" element={<컴포넌트/>} />

4. Link 태그 사용
<Link to="/></Link>