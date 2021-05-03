import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, ButtonGroup, Carousel, Alert,Container,Row,Col } from 'react-bootstrap';
import logo from './bidoflogo.png';
import avatar from './avatar.png';
import './style.css';
import { Toy, Elect, Food, Fasions, Automotive, Books } from './Category';
import { auth, db } from '../config';

const Profile = () => {
    const { currentUser, logout, } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogout() {
        setError('');
        try {
            await logout();
            history.push("/");
        }
        catch {
            setError('Failed to log out')
        }
    }

    const [user, setUser] = useState();

    async function getUser() {
        try {
            const documentSnapshot = await db.collection('users').doc(currentUser.uid).get();
            const userData = documentSnapshot.data();
            setUser(userData);
        } catch {
            setError('Cant get data');
        }
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <React.Fragment>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
                    <Nav className="mr-auto">
                        {!currentUser ? (
                            <React.Fragment>
                                <Nav.Link href="#home">
                                    <Link to="/LogIn" className="btn btn-primary">Log In</Link>
                                </Nav.Link>
                                <Nav.Link href="#features">
                                    <Link to="/SignUp" className="btn btn-success">Sign Up</Link>
                                </Nav.Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Nav.Link href="#features1">
                                    <Button className="btn btn-danger" onClick={handleLogout}>Sign Out</Button>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                </Nav.Link>
                            </React.Fragment>
                        )}
                    </Nav>
                </Navbar>
                <img src={avatar} className='profilepic'></img>
                <h1 className='proname'>{user && user.name}</h1>
                <div className="tareaandbtn">
                <textarea className="protextarea" placeholder="Description"></textarea>
                <Button variant="secondary" className="btnpro">Edit</Button>{' '}
                </div>
                <div className="bidbox">
                    <h2>MY BID</h2>
                    <Container fluid>
                        <Row>
                            <Col>1 of 1</Col>
                        </Row>
                        <Row>
                            <Col>1 of 2</Col>
                        </Row>
                        <Row>
                            <Col>1 of 3</Col>
                        </Row>
                        <Row>
                            <Col>1 of 4</Col>
                        </Row>
                        <Row>
                            <Col>1 of 5</Col>
                        </Row>
                        <Row>
                            <Col><Button variant="secondary" className='btnnewbid'>NEW+</Button>{' '}</Col>
                        </Row>
                    </Container>
                </div>

                <div className="offerbox">
                    <h2>MY OFFER</h2>
                    <Container fluid>
                        <Row>
                            <Col>1 of 1</Col>
                        </Row>
                        <Row>
                            <Col>1 of 2</Col>
                        </Row>
                        <Row>
                            <Col>1 of 3</Col>
                        </Row>
                        <Row>
                            <Col><Button variant="secondary" className='btnnewoffer'>NEW+</Button>{' '}</Col>
                        </Row>
                    </Container>


                </div>

            </React.Fragment>
        </div>
    )
}

export default Profile;
