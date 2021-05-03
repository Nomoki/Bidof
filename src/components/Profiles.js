import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Alert,Container,Row,Col } from 'react-bootstrap';
import logo from './bidoflogo.png';
import avatar from './avatar.png';
import './style.css';
import { db, storage } from '../config';

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


    const [proUser, setProUser] = useState();
    const [editState, setEditState] = useState(false);
    const descRef = useRef();

    const proState = (e) =>{
        e.preventDefault();
        setEditState(!editState);
    }

   
    async function editProfile(e){
        e.preventDefault();
        try {
            await db.collection('users').doc(currentUser.uid).get().then((snap) => {
                    const profileRef = snap.ref.collection('profiles').doc(currentUser.uid);
                    profileRef.set({
                        desc: descRef.current.value
                    }).catch(e => console.error(e));
                });
            setEditState(!editState);
            history.push('/Profiles');
            
        } catch {
            setError('Cant get edit2');
        }
    }

    async function setProfile(){
        try {
            const edited = await db.collection('users').doc(currentUser.uid).collection('profiles').doc(currentUser.uid).get()
            const proData = edited.data();
            setProUser(proData);
        } catch {
            setError('Cant get edit');
        }
    } 
    useEffect(() => {
        setProfile();
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
                <img src={avatar} className='profilepic' alt='pro'></img>
                <h1 className='proname'>{user && user.name}</h1>

                {!editState ? (
                <>
                <div className="tareaandbtn" >
                 <p className="protextarea">{proUser && proUser.desc} </p>    
                <Button type="submit" variant="secondary" className="btnpro" onClick={proState} >Edit</Button>
                </div>
                </>
                ) : (
                <>
                <form onSubmit={editProfile}>
                <div className="tareaandbtn" >
                <input ref={descRef} className="protextarea" placeholder="Description"></input>
                <Button type="submit" variant="secondary" className="btnpro">submit</Button>
                </div>
                </form>
                </>
                )
                }
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
                            <Col><Link to="/CreateBidPosts" variant="secondary" className='btnnewbid'>NEW+</Link></Col>
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
                            <Col><Link to="/CreateOfferPosts" variant="secondary" className='btnnewoffer'>NEW+</Link></Col>
                        </Row>
                    </Container>


                </div>

            </React.Fragment>
        </div>
    )
}

export default Profile;
