import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, ButtonGroup, Carousel, Alert, Container, Row, Col, Form } from 'react-bootstrap';
import logo from './bidoflogo.png';
import plus from './plus.png';
import './style.css';
import { Toy, Elect, Food, Fasions, Automotive, Books } from './Category';
import { auth, db } from '../config';

const CreateBidPost = () => {
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
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home"><Link to="/"><img src={logo} alt="Logo" className="logo" /></Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        {!currentUser ? (
                            <React.Fragment>
                                <Nav.Link >
                                    <Link to="/LogIn" className="btn btn-primary">Log In</Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Link to="/SignUp" className="btn btn-success">Sign Up</Link>
                                </Nav.Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Nav.Link >
                                    <Link to="/Profiles" className="btn btn-info">{user && user.name}</Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Button className="btn btn-danger" onClick={handleLogout}>Sign Out</Button>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                </Nav.Link>
                            </React.Fragment>
                        )}
                    </Nav>
                </Navbar>
                <img src={plus} className='imgplus'></img>
                <div className="postbox">
                    <Form.Group >
                        <Form.Control className="proname" size="lg" type="text" placeholder="Product name" />
                    </Form.Group>

                    <div className="pricebox">
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Price" />
                        </Form.Group>
                    </div>

                    <div className="desbox">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Description"/>
                        </Form.Group>
                        <Button variant="secondary" className="editpost">EDIT</Button>{' '}
                    </div>
                    

                </div>

            </>
        </div>
    )
}

export default CreateBidPost
