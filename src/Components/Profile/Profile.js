import React from 'react';
import './Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';

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
        email: currUser.email
    }


    const [state, setState] = useState(initialState)



    const handleEdit = () => {
        setState({
            isEdit: true,
            name: state.name,
            email: state.email
        })
    }

    const handleSave = (event) => {
        currUser.name = state.name;
        currUser.email = state.email;

        console.log(currUser.name, state.name, currUser.email, state.email)

        setState({
            isEdit: false,
            name: state.name,
            email: state.email
        })
    }

    const handleChangeName = (event) => {
        setState({
            isEdit: state.isEdit,
            name: event.target.value,
            email: state.email
        })
        console.log("nice")
    }

    const handleChangeEmail = (event) => {
        console.log(event.target.value)
        setState({
            isEdit: state.isEdit,
            name: state.name,
            email: event.target.value
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
        GitComp = <Col md="auto" lg="auto">{currUser.github}</Col>;
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
            <div>
                {/* TODO: Implement changing image */}
                <img id="profile-img" src={currUser.profileImg} />
            </div>
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



    );
}

export default Profile



