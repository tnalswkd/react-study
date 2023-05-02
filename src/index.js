import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// index.js가 가장 먼저 실행되는 파일임.
// 이 파일에서는 react-dom으로부터 ReactDOM을 가져오고 있는데 이는 ReactDOM이라는 객체를 react-dom이라는
// 서드 파티 라이브러리에서 가져온다는 뜻으로 이 라이브러리는 의존성 중 하나이며 로컬에 다운로드 및 설치되어 있습니다.
// ./같은 폴더 안에 있다는 말
// js파일은 뒤에 .js를 붙이지 않는다.
