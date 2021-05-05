import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, ButtonGroup, Carousel, Alert, Container, Row, Col, Form } from 'react-bootstrap';
import logo from './bidoflogo.png';
import plus from './plus.png';
import './style.css';
import { Toy, Elect, Food, Fasions, Automotive, Books } from './Category';
import firebaseConfig, { auth, db } from '../config';

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

    const [prodUser, setProdUser] = useState();
    const [editState, setEditState] = useState(false);
    const prodNameRef = useRef();
    const prodPriceRef = useRef();
    const prodDescRef = useRef();

    const proState = (e) =>{
        e.preventDefault();
        setEditState(!editState);
    }

   
    async function editProduct(e){
        e.preventDefault();
        try {
            await db.collection('users').doc(currentUser.uid).get().then((snap) => {
                    const profileRef = snap.ref.collection('bidprod').doc();
                    profileRef.set({
                        produtpic: fileUrl,
                        productname: prodNameRef.current.value,
                        productprice: prodPriceRef.current.value,
                        productdesc: prodDescRef.current.value
                    }).catch(e => console.error(e));
                });
            await db.collection('productBid')
                    .doc()
                    .set({
                        produtpic: fileUrl,
                        productname: prodNameRef.current.value,
                        productprice: prodPriceRef.current.value,
                        productdesc: prodDescRef.current.value,
                        nameuser: `${user && user.name}`,
                        picuser: `${proUser && proUser.avatars}`
                    })
            setEditState(!editState);
            history.push('/');
            
        } catch {
            setError('Cant get edit2');
        }
    }

    // async function setProduct(){
    //     try {
    //         const edited = await db.collection('users').doc(currentUser.uid).collection('bidprodlist').get()
    //         const proData = edited.data();
    //         setProdUser(proData);
    //     } catch {
    //         setError('Cant get edit');
    //     }
    // } 
    // useEffect(() => {
    //     setProduct();
    // }, []);

    const [fileUrl, setFileUrl] = useState(null)

    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebaseConfig.storage().ref('productpic');
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL())

    }
    
    const [proUser, setProUser] = useState();

    async function setProfile() {
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
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand ><Link to="/"><img src={logo} alt="Logo" className="logo" /></Link></Navbar.Brand>
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
                {!editState ? (
                <>
                <img  src={plus} className='imgplus'  onClick={proState}></img>
                <div className="postbox">
                    <Form.Group >
                        <Form.Control disabled="disabled" className="proname" size="lg" type="text" placeholder="Product name" />
                    </Form.Group>

                    <div className="pricebox">
                        <Form.Group>
                            <Form.Control disabled="disabled" size="lg" type="text" placeholder="Price" />
                        </Form.Group>
                    </div>

                    <div className="desbox">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control disabled="disabled" as="textarea" rows={3} placeholder="Description"/>
                        </Form.Group>
                    </div>
                </div>
                </>) : (
                <>
                <form onSubmit={editProduct}>
                <div className="selpicprobid">
                <input type="file" onChange={onFileChange}/>
                </div>
                <div className="postbox">
                    <Form.Group >
                        <Form.Control ref={prodNameRef} className="proname" size="lg" type="text" placeholder="Product name" />
                    </Form.Group>

                    <div className="pricebox">
                        <Form.Group>
                            <Form.Control ref={prodPriceRef} size="lg" type="text" placeholder="Price" />
                        </Form.Group>
                    </div>

                    <div className="desbox">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control ref={prodDescRef} as="textarea" rows={3} placeholder="Description"/>
                        </Form.Group>
                        <Button type="submit" variant="secondary" className="editpost">Submit</Button>
                    </div>
                </div>
                </form>
                </>
                )}
            </>
        </div>
    )
}

export default CreateBidPost
