import React, { Component } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import {Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAnXtdpxXg1eYEyGJ3xLKF0C2VnYqTQLNc",
  authDomain: "ollie-70ff1.firebaseapp.com",
  projectId: "ollie-70ff1",
  storageBucket: "ollie-70ff1.appspot.com",
  messagingSenderId: "133461552512",
  appId: "1:133461552512:web:900329aa159323de632565",
  measurementId: "G-1W7ZXJ43V9"
};

const app = initializeApp(firebaseConfig);

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleChange2(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("User successfully created");
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

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-12" >
    <form onSubmit={this.handleSubmit}>
      <h3>Sign Up</h3>

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
    </form>
    <form onSubmit={this.github}>
      <h3 style={{ textAlign: 'center', marginBottom:20, marginTop: 30 }}>OR</h3>
      <button type="submit" className="btn btn-primary btn-block" >Sign-in with GitHub</button>
    </form>
    
    </div>
    </div>
    </div>
    );
  }
}