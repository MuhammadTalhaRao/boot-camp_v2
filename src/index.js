import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cool_name from './ma_jsx';
import Button from './button.js';
import CounterContext from './CounterHook.js';
import Parent from './Parent.js';

ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
