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

---

## 3-1 useParams

- URL파라미터 추출

1. fkdnxm tjfwjddptj vkfkalxj cncnf
<Route path="/users/:id" element={<UserDetail/> }>

2. 컴포넌트에서 파라미터 추출
const {id} = useParams();

--

## 4. forwardRef

부모 컴포넌트가 자식 컴포넌트 DOM 요소에 직접 접근할 수 있도록 도와주는 기능
forwardRef를 사용하면 부모가 자식 컴포넌트에 전달한 ref를 자식이 받아서 특정 DOM에 연결

---

## 5. Recoil

설치 :: npm i recoil

1. 꼭 index.js에 RecoilRoot 작성

2. atom 작성
```jsx
    const textState = atom((
        key : "textState", // 고유한 키
        default : "", // 기본값
    ));
```

3. 사용한 컴포넌트에서 useRecoilState사용
```jsx
    const [text, setText] = useRecoilState(textState)
```

