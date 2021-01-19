import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap';
import 'jquery';
import 'popper.js';

let count = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let stop = setInterval(function () {

  count++;
  
  count2 = Math.floor(count / 10);
  count3 = Math.floor(count / 100);
  count4 = Math.floor(count / 1000);
  count5 = Math.floor(count / 10000);
  count6 = Math.floor(count / 100000);
  
  ReactDOM.render(
    <React.StrictMode>
      <App count1={count} count2={count2} count3={count3} count4={count4} count5={count5} count6={count6} varNameId={stop}  />
    </React.StrictMode>,
    document.getElementById('root')
    );
    

}, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
