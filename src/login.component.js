import React, { Component } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider  } from "firebase/auth";
import {Link, useHistory } from "react-router-dom";
const { Octokit } = require("@octokit/core");


const provider = new GithubAuthProvider();

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.github = this.github.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleChange2(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.props.history.push("/Board");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ..
      });
    event.preventDefault();
    
  }

  
  github(event) {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        this.props.history.push("/Board");
        
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, credential);
        // ...
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" >
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label className="form-label">Email address</label>
          <input type="email" value={this.state.email} className="form-control" onChange={this.handleChange} placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label className="form-label" for="password">Password</label>
          <input id="password" type="password" value={this.state.password} className="form-control" onChange={this.handleChange2} placeholder="Enter password" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="form-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <text style={{ marginTop: -50}}> Don't have an account? </text>
        <Link to="/signup">
        Sign up
      </Link>
      </form>
      <form onSubmit={this.github}>
        <h3 style={{ textAlign: 'center', marginBottom:20, marginTop: 30 }}>OR</h3>
        <button type="submit" className="btn btn-primary btn-block" style={{width: 250}}>Sign-in with GitHub</button>
      </form>
      
      </div>
      </div>
      </div>
    );
  }
}