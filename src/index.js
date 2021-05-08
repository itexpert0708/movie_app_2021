import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//JSX는 JAVASCRIPT 안의 HTML이다. COMPONENT를 만들고 어떻게 사용해야하는지 대햔 것
//강의에서는 1개의 컴포넌트만 랜더링 할수있었으나, 실제는 2개를 사용해도 문제가없다.
//React.StrictMode - 컴포넌트 내의 잠재적인 문제를 알아내기위한도구 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


