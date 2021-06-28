import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';


import Apropos from './pages/Apropos/apropos';
import '../src/styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
    <Header/>

      </Route>
      <Route path ="/apropos">
        <Apropos/>
      </Route>
    </Router>

 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
