import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import CreateStory from './CreateStory';
import Board from './Board';
import reportWebVitals from './reportWebVitals';
import login from './login';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
   <Switch>
     <Route exact path="/" component={App} />
     <Route exact path="/login" component={login} />
     <Route path="/CreateStory" component={CreateStory} />
     <Route path="/Board" component={Board} />
   </Switch>
  </BrowserRouter>,
  rootElement
);
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
