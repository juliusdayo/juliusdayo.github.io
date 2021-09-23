//React
import React from 'react';
import ReactDOM from 'react-dom';
//Css
import './index.css';


//components
import App from './App';
import Navigation from './components/templates/navigation.js';
import Intro from './components/intro/Intro.js';
import reportWebVitals from './reportWebVitals';

let introMessage = "Hi, I'm Julius Caezar Coros";

ReactDOM.render(<Navigation />,document.getElementById('navigation'));

ReactDOM.render(
  <React.StrictMode>
  <div className="Main-Container">
    <Intro desc={introMessage}/>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
