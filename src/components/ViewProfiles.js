import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Alert, Container, Row, Col } from 'react-bootstrap';
import logo from './bidoflogo.png';
import avatar from './avatar.png';
import './style.css';
import firebaseConfig, { db } from '../config';

const ViewProfile = () => {
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

    function getCookie2(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var userPic = getCookie2("picuser");
    var userName = getCookie2("nameuser");
    var userDesc = getCookie2("descuser");
    var yourName = `${user && user.name}`;

    return (
        <div>
            <React.Fragment>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand ><Link to="/"><img src={logo} alt="Logo" className="logo" /></Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        {!currentUser ? (
                            <React.Fragment>
                                <Nav.Link >
                                    <Link to="/LogIn" className="btn btn-primary">Log In</Link>
                                </Nav.Link>
                                <Nav.Link href="#features">
                                    <Link to="/SignUp" className="btn btn-success">Sign Up</Link>
                                </Nav.Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Nav.Link>
                                    <Button className="btn btn-danger" onClick={handleLogout}>Sign Out</Button>
                                    {error && <Alert variant="danger">{error}</Alert>}
                                </Nav.Link>
                            </React.Fragment>
                        )}
                    </Nav>
                </Navbar>
                {({yourName} != {userName}) ? (
                <>
                <img src={userPic} className='profilepic' alt=''></img>
                <h1 className='proname'>{userName}</h1>
                <p className="protextarea">{userDesc} </p>
                </>
                ) : (
                    <Redirect to="/Profiles" />
                )
                }
            </React.Fragment>
        </div>
    )
}

export default ViewProfile;
