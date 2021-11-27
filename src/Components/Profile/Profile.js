import React from 'react';
import './Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Sidebar from '../Sidebar/Sidebar'
import {Link } from "react-router-dom";

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

const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  console.log(user.email);

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
} else {
  console.log("user is null");
}

//sidebar component from https://reactjsexample.com/minimal-side-navigation-component-for-react/

const currUser = {
    name: "Qusai",
    email: "Qusai@gmail.com",
    github: "https://github.com",
    projects: ["One", "Two", "Three", "Four"],
    profileImg: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2016%2F11%2Frock-insta.jpg"
}


const Profile = () => {

    const initialState = {
        isEdit: false,
        name: currUser.name,
        email: currUser.email,
        github: currUser.github
    }


    const [state, setState] = useState(initialState)



    const handleEdit = () => {
        setState({
            isEdit: true,
            name: state.name,
            email: state.email,
            github: state.github
        })
    }

    const handleSave = (event) => {
        currUser.name = state.name;
        currUser.email = state.email;
        currUser.github = state.github;

        setState({
            isEdit: false,
            name: state.name,
            email: state.email,
            github: state.github
        })
    }

    const handleChangeName = (event) => {
        setState({
            isEdit: state.isEdit,
            name: event.target.value,
            email: state.email,
            github: state.github
        })
    }

    const handleChangeEmail = (event) => {
        setState({
            isEdit: state.isEdit,
            name: state.name,
            email: event.target.value,
            github: state.github
        })
    }

    const handleChangeGithub = (event) => {
        setState({
            isEdit: state.isEdit,
            name: state.name,
            email: state.email,
            github: event.target.value
        })
    }

    var fullNameComp;
    var EmailComp;
    var GitComp;
    var ProjectsComp;
    var button;

    if (state.isEdit) {
        fullNameComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeName} value={state.name}></input></Col>;
        EmailComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeEmail} value={state.email}></input></Col>;
        GitComp = <Col md="auto" lg="auto"><input type="text" onChange={handleChangeGithub} value={state.github}></input></Col>;;
        ProjectsComp = <Col md="auto" lg="auto">{currUser.projects}</Col>;
        button = <button id="edit-btn" onClick={handleSave}>Save Changes</button>;
    }
    else {
        fullNameComp = <Col md="auto" lg="auto">{currUser.name}</Col>;
        EmailComp = <Col md="auto" lg="auto">{currUser.email}</Col>;
        GitComp = <Col md="auto" lg="auto">{currUser.github}</Col>;
        ProjectsComp = <Col md="auto" lg="auto">{currUser.projects}</Col>;
        button = <button id="edit-btn" onClick={handleEdit}>Edit Profile</button>;
    }



    return (
        <div className="Profile">
            <div className="sidebar">
                <Sidebar />
            </div>

            

            <div className="page-content">
                <div>
                {/* TODO: Implement changing image */}
                <img id="profile-img" src={currUser.profileImg} />
                </div>
                <div id="profile-info">
                    <div>
                        <Container>  
                            <Row className="center">
                                <Col>Full Name: </Col>
                                {fullNameComp}
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
                    <div>
                        <Container>  
                            <Row className="center">
                                <Col>GitHub: </Col>
                                {GitComp}
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container>  
                            <Row className="center">
                                <Col>Projects: </Col>
                                {ProjectsComp}
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



