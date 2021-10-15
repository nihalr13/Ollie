import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Button from "./Button.js";
import {Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1> Ollie </h1>
        </p>
        <Link to="/CreateStory"><button>
          Create Story
          </button>
          <br></br>
          <br></br>
          </Link>
          <button>
            Delete Story
          </button>
          <br></br>
          <Link to="/Board"><button>
          View Board
          </button> 
          </Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
