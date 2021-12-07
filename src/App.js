import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Button from "./Button.js";
import {Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function signout() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    signOut(auth).then(() => {
      alert("Signed out successfully.");
    }).catch((error) => {
      alert(error);
    });
  } else {
    alert("No account is currently signed in.");
  }
}
// demo commit
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1> Ollie </h1>
        </p>
        <Link to="/login"><button>
          Login
          </button>
          </Link>
        <Link to="/signup"><button>
          Sign-up
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
