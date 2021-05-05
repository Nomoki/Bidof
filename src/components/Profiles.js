import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Alert, Container, Row, Col } from 'react-bootstrap';
import logo from './bidoflogo.png';
import avatar from './avatar.png';
import './style.css';
import firebaseConfig, { db } from '../config';

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

    const proState = (e) => {
        e.preventDefault();
        setEditState(!editState);
    }


    async function editProfile(e) {
        e.preventDefault();
        try {
            await db.collection('users').doc(currentUser.uid).get().then((snap) => {
                const profileRef = snap.ref.collection('profiles').doc(currentUser.uid);
                profileRef.set({
                    desc: descRef.current.value,
                    avatars: fileUrl
                }).catch(e => console.error(e));
            });
            setEditState(!editState);
            history.push('/Profiles');
        } catch {
            setError('Cant get edit2');
        }
    }

    async function setProfile(e) {
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

    const [fileUrl, setFileUrl] = useState(null)

    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebaseConfig.storage().ref('profilepic');
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL())

    }

    const [proD, setProD] = useState([]);
    const [proD2, setProD2] = useState([]);

    const getProduct = () => {
        try {
            db.collection("users").doc(currentUser.uid).collection('bidprod').get().then((querySnapshot) => {
                const productRef = [];
                querySnapshot.forEach((doc) => {
                    const productRefs = {
                        id: doc.id,
                        ...doc.data()
                    };
                    productRef.push(productRefs);
                    console.log(doc.id, " => ", doc.data());
                });
                setProD(productRef);
            });
        } catch {
            setError('Cant get Product');
        }
    }
    useEffect(() => {
        getProduct();
    }, []);

    const getProduct2 = () => {
        try {
            db.collection("users").doc(currentUser.uid).collection('offerprod').get().then((querySnapshot) => {
                const productRef = [];
                querySnapshot.forEach((doc) => {
                    const productRefs = {
                        id: doc.id,
                        ...doc.data()
                    };
                    productRef.push(productRefs);
                    console.log(doc.id, " => ", doc.data());
                });
                setProD2(productRef);
            });
        } catch {
            setError('Cant get Product');
        }
    }
    useEffect(() => {
        getProduct2();
    }, []);

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




                {!editState ? (
                    <>
                        <img src={proUser && proUser.avatars} className='profilepic' alt=''></img>
                        <h1 className='proname'>{user && user.name}</h1>
                        <div className="tareaandbtn" >
                            <p className="protextarea">{proUser && proUser.desc} </p>
                            <Button variant="secondary" className="btnpro" onClick={proState} >Edit</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <form onSubmit={editProfile}>
                            <input type="file" className="protextarea" onChange={onFileChange} />
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
                        <div className="itemoff">
                            {proD.map(proD => (
                                <Row key={proD.id}>
                                    <Col md={3}><img src={proD.produtpic} className="imgprooff" /></Col>
                                    <Col md={9}><h3>{proD.productname}</h3>
                                        <h3>฿  {proD.productprice}</h3>
                                        <p>{proD.productdesc}</p></Col>
                                </Row>
                            ))}
                        </div>
                        <Row>
                            <Col><Link to="/CreateBidPosts" variant="secondary" className='btnnewbid'>NEW+</Link></Col>
                        </Row>
                    </Container>
                </div>

                <div className="offerbox">
                    <h2>MY OFFER</h2>
                    <Container fluid>
                        <div className="itemoff">
                            {proD2.map(proD2 => (
                                <Row key={proD2.id}>
                                    <Col><img src={proD2.produtpic} className="imgprooff" /></Col>
                                    <Col><h3>{proD2.productname}</h3>
                                        <h3>฿ {proD2.productprice}</h3>
                                        <p>{proD2.productdesc}</p></Col>

                                </Row>
                            ))}
                        </div>
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
