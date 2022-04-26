import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var axe = require('react-axe');
axe(React, ReactDOM, 1000);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);