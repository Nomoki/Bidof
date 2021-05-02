import React,{ useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, ButtonGroup, Carousel, Alert } from 'react-bootstrap';
import logo from './bidoflogo.png';
import './style.css';
import { Toy, Elect, Food, Fasions, Automotive, Books } from './Category';
import { auth, db } from '../config';


const Home = () => {

    const [catChange, setCatChange] = useState(false);
    const [catChange2, setCatChange2] = useState(false);
    const [catChange3, setCatChange3] = useState(false);
    const [catChange4, setCatChange4] = useState(false);
    const [catChange5, setCatChange5] = useState(false);
    const [catChange6, setCatChange6] = useState(false);
     
     
    const catToy = (e) => {
        e.preventDefault();
        setCatChange(!catChange);
    }
    useEffect(() => {
        const stateHold = JSON.parse(localStorage.getItem('catHold'));
        setCatChange(stateHold);
    }, [])
    useEffect(() => {
        localStorage.setItem('catHold', JSON.stringify(catChange));
    }, [catChange])

   
    
    const catElec = (e) => {
        e.preventDefault();
        setCatChange2(!catChange2);
    }
    useEffect(() => {
        const stateHold2 = JSON.parse(localStorage.getItem('catHold2'));
        setCatChange2(stateHold2);
    }, [])
    useEffect(() => {
        localStorage.setItem('catHold2', JSON.stringify(catChange2));
    }, [catChange2])



    const catFood = (e) => {
        e.preventDefault();
        setCatChange3(!catChange3);

    }
    useEffect(() => {
        const stateHold3 = JSON.parse(localStorage.getItem('catHold3'));
        setCatChange3(stateHold3);
    }, [])
    useEffect(() => {
        localStorage.setItem('catHold3', JSON.stringify(catChange3));
    }, [catChange3])



    const catFasion = (e) => {
        e.preventDefault();
        setCatChange4(!catChange4);

    }
    useEffect(() => {
        const stateHold4 = JSON.parse(localStorage.getItem('catHold4'));
        setCatChange4(stateHold4);
    }, [])
    useEffect(() => {
        localStorage.setItem('catHold4', JSON.stringify(catChange4));
    }, [catChange4])



    const catAutomotive = (e) => {
        e.preventDefault();
        setCatChange5(!catChange5);

    }
    useEffect(() => {
        const stateHold5 = JSON.parse(localStorage.getItem('catHold5'));
        setCatChange5(stateHold5);
    }, [])
    useEffect(() => {
        localStorage.setItem('catHold5', JSON.stringify(catChange5));
    }, [catChange5])



    const catBooks = (e) => {
        e.preventDefault();
        setCatChange6(!catChange6);

    }
    useEffect(() => {
        const stateHold6 = JSON.parse(localStorage.getItem('catHold6'));
        setCatChange6(stateHold6);
    }, [])
    useEffect(() => {
        localStorage.setItem('catHold6', JSON.stringify(catChange6));
    }, [catChange6])

    const { currentUser, logout, } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogout(){
        setError('');
        try{
            await logout();
            history.push("/");
        }
        catch {
            setError('Failed to log out')
        }
    }

    const [user, setUser] = useState();

    async function getUser(){
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
        <React.Fragment>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
                <Nav className="mr-auto">
                    { !currentUser ? (
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
                            <h1>{user && user?.name}</h1>
                        </Nav.Link>
                    </React.Fragment>
                    )}
                </Nav>             
            </Navbar>
                <ButtonGroup aria-label="Basic example" className="topbtn">
                    <Button variant="secondary">BID</Button>
                    <Button variant="secondary">OFFER</Button>
                </ButtonGroup>

            <Carousel className="cos">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/800/400"
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h3 className="disco">DISCOVER</h3>
            <h3 className="cat">Category</h3>
            {(!catChange && !catChange2 && !catChange3 && !catChange4 && !catChange5 && !catChange6) ? (
                <div className="btncat">
                <Button variant="secondary" size="lg" className="btnboxh" onClick={catToy}>
                    <h1 className="fontcath">TOYS</h1>
                </Button>
                <Button variant="secondary" size="lg" className="btnboxh" onClick={catElec}>
                <h1 className="fontcath">Electronic</h1>
                </Button>
                <Button variant="secondary" size="lg" className="btnboxh" onClick={catFood}>
                <h1 className="fontcath">Food & Beverage</h1>
                </Button>
                <Button variant="secondary" size="lg" className="btnboxh" onClick={catFasion}>
                <h1 className="fontcath">Fashion</h1>
                </Button>
                <Button variant="secondary" size="lg" className="btnboxh" onClick={catAutomotive}>
                <h1 className="fontcath">Automotive</h1>
                </Button>
                <Button variant="secondary" size="lg" className="btnboxh" onClick={catBooks}>
                <h1 className="fontcath">BOOKS</h1>
                </Button>
                </div>
                ) : (
                <React.Fragment>
                <Toy catChange={catChange} setCatChange={setCatChange}/>
                <Elect catChange2={catChange2} setCatChange2={setCatChange2}/>
                <Food catChange3={catChange3} setCatChange3={setCatChange3}/>
                <Fasions catChange4={catChange4} setCatChange4={setCatChange4}/>
                <Automotive catChange5={catChange5} setCatChange5={setCatChange5}/>
                <Books catChange6={catChange6} setCatChange6={setCatChange6}/>
                </React.Fragment>
            )}

        </React.Fragment>
    )
}

export default Home;