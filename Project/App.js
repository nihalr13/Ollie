import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Button from "./Button.js";
import {Link } from "react-router-dom";

/*class App extends Component {
  state = {
    name: "king"
  };
  changeName = () => {
    this.setState({
      name: "queen"
    });
  };
  render() {
    return (
      <div>
        <h1>Ollie</h1>
        <Button name="Create Story" click={this.changeName} />
        <Button name="Delete Story" click={this.changeName} />
      </div>
    );
  }
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/CreateStory"><button>
          Create Story
          </button> 
          </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
