import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//.js可加可不加
import registerServiceWorker from './registerServiceWorker';

let div = document.getElementById('root')
ReactDOM.render(<App />, div);//把App这个标签渲染到div里面
//XML  not  HTML
registerServiceWorker();
