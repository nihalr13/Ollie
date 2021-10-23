import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import CreateStory from './CreateStory';
import Board from './Components/Board/Board';
import Settings from './Components/Settings/Settings'
import StoryDetails from './Components/StoryDetails/StoryDetails';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login.component';
import Signup from './signup.component';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
   <Switch>
     <Route exact path="/" component={App} />
     <Route path="/CreateStory" component={CreateStory} />
     <Route path="/Board" component={Board} />
     <Route path="/Settings" component={Settings} />
     <Route path="/StoryDetails" component={StoryDetails} />
     <Route path="/login" component={Login} />
     <Route path="/signup" component={Signup} />
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