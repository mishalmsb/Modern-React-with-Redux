// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App/>, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './style/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//     <React.StrictMode>
//       <App/>
//     </React.StrictMode>
// );

root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
