import React from 'react';
import './Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Profile = () => {
    return (
        <div className="Profile">
            <div>
                <img id="profile-img" src="https://media-exp1.licdn.com/dms/image/C5603AQGrRbdlQ_bj3Q/profile-displayphoto-shrink_800_800/0/1562788239448?e=1640217600&v=beta&t=zNUFu__xwv_IPy1u97_T5PHM4XB3G1OHYmgigyhh3WM" />
            </div>
            <div>
                <Container>  
                    <Row className="center">
                        <Col>Full Name: </Col>
                        <Col md="auto" lg="auto">Placeholder</Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>  
                    <Row className="center">
                        <Col>Email: </Col>
                        <Col md="auto" lg="auto">Placeholder</Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>  
                    <Row className="center">
                        <Col>GitHub: </Col>
                        <Col md="auto" lg="auto">Placeholder</Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>  
                    <Row className="center">
                        <Col>Projects: </Col>
                        <Col md="auto" lg="auto">Placeholder</Col>
                    </Row>
                </Container>
            </div>
        </div>



    );
}

export default Profile



