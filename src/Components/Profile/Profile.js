import React from 'react';
import './Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Sidebar from '../Sidebar/Sidebar'
import {Link } from "react-router-dom";
import poll from './github.js';

localStorage.oldCommit = "0";

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

function Profile () {
    const auth = getAuth();
    const user = auth.currentUser;
    var user_email;
    if (user !== null) {
        user_email = user.email;
        console.log(user.email);
    } else {
        console.log("user is null");
    }

    const currUser = {
        email: user_email,
        repoOwner: "QAGatPurdue",
        repoName: "Ollie",
        profileImg: "https://freesvg.org/img/abstract-user-flat-4.png"  
    }

    const initialState = {
        isEdit: false,
        email: currUser.email,
        repoOwner: currUser.repoOwner
    }

    const [state, setState] = useState(initialState)

    const handleEdit = () => {
        setState({
            isEdit: true,
            email: state.email,
            repoOwner: state.repoOwner
        })
    }

    const handleSave = (event) => {
        currUser.email = state.email;
        currUser.repoOwner = state.repoOwner;

        setState({
            isEdit: false,
            email: state.email,
            repoOwner: state.repoOwner
        })
        poll(currUser.repoOwner, currUser.email);
        
    }

    const handleChangeEmail = (event) => {
        setState({
            isEdit: state.isEdit,
            email: event.target.value,
            repoOwner: state.repoOwner
        })
    }

    const handleChangerepoOwner = (event) => {
        setState({
            isEdit: state.isEdit,
            email: state.email,
            repoOwner: event.target.value
        })
    }

    var EmailComp;
    var GitComp;
    var repoNameComp;
    var button;

    if (state.isEdit) {
        EmailComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeEmail} value={state.email}></input></Col>;
        GitComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangerepoOwner} value={state.repoOwner}></input></Col>;;
        repoNameComp = <Col md="auto" lg="auto">{currUser.repoName}</Col>;
        button = <button id="edit-btn" onClick={handleSave}>Save Changes</button>;
    }
    else {
        EmailComp = <Col md="auto" lg="auto">{currUser.email}</Col>;
        GitComp = <Col md="auto" lg="auto">{currUser.repoOwner}</Col>;
        repoNameComp = <Col md="auto" lg="auto">{currUser.repoName}</Col>;
        button = <button id="edit-btn" onClick={handleEdit}>Edit Profile</button>;
    }



    return (
        <div className="Profile">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="page-content">
                <div>
                <img id="profile-img" src={currUser.profileImg} />
                </div>
                <div id="profile-info">
                    <div>
                        <Container>  
                            <Row className="center">
                                <Col>Repository Name: </Col>
                                {repoNameComp}
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container>  
                            <Row className="center">
                                <Col>Repository Owner: </Col>
                                {GitComp}
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container>  
                            <Row className="center">
                                <Col>Email: </Col>
                                {EmailComp}
                            </Row>
                        </Container>
                    </div>
                    {button}
                </div>
                
            </div>
            <div>
                <Link to="/login">
                <button onClick={signout}>Sign-out</button> 
                </Link>
            </div>
        </div>

    );
}

export default Profile



