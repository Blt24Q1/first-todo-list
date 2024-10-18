# 프로젝트 생성

콘솔에서 프로젝트를 생성

```bash
npm create vite@latest
# 프로젝트를 아래와 같이 입력
# Project name: fisrt-todo-list
# Select a framework: React
# Select a variant: JavaScript
```

vscode로 열기

```bash
code first-todo-list
```

vscode 터미널에서 의존성 설치

```bash
npm install
```

- src 디렉터리에서 css를 지우고
- assets 디렉터리도 삭제
- App.jsx를 가장 기본적인 내용으로만 설정

```javascript
function App() {
  return <div>Hello world</div>;
}

export default App;
```

- src 디렉터리에 index.css (글로벌 css) 추가
- main.jsx 파일에서 아래 코드 추가

```jsx
import "./index.css";
```

# TODO List 컴포넌트 구현

src/components 디렉터리에 구현한 컨트롤과 css 쌍 참고

# TODO List 앱에 useState를 이용하여 할일 추가 및 상태 관리 구현

- Controls에서 만들어지는 데이터가
- TodoList로 옮겨지는 구조

- Controls와 TodoList의 데이터는 부모인 App에서 만들어져서 전달되어야 한다
