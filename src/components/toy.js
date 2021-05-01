import React from 'react';
import { Link,Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,Nav,ButtonGroup,Carousel} from 'react-bootstrap';
import logo from './bidoflogo.png';
import './style.css';


const Home = () => {
    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" className="logo" /></Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link href="#home">
                        <Link to="/LogIn" className="btn btn-primary">Log In</Link>
                    </Nav.Link>
      <Nav.Link href="#features"><Link to="/SignUp" className="btn btn-success">Sign Up</Link></Nav.Link>
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
            <h3 className="cat">CATAGORY</h3>
            <div className="btncat">
                <Button variant="secondary" size="lg" className="btnbox" onClick={toy}>
                    TOYS
                </Button>
                <Button variant="secondary" size="lg" className="btnbox">
                    Electronic
                </Button>
                <Button variant="secondary" size="lg" className="btnbox">
                    Food & Beverage
                </Button>
                <Button variant="secondary" size="lg" className="btnbox">
                    Fashion
                </Button>
                <Button variant="secondary" size="lg" className="btnbox">
                    Automotive
                </Button>
                <Button variant="secondary" size="lg" className="btnbox">
                    BOOKS
                </Button>

            </div>
              
                <Route path="/toy"><toy/></Route>
   
            
                {currentUser ? (
                    <p>You are logged in - <Link to="/Dashboard">View teststuff</Link></p>
                ) : (
                    <p>
                        
                    </p>
                )}
        </React.Fragment>
    )
}

export default toy;