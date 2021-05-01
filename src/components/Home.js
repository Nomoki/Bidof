import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,Nav,ButtonGroup} from 'react-bootstrap';
import logo from './bidoflogo.png';
import './style.css'

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
   
            
                {currentUser ? (
                    <p>You are logged in - <Link to="/Dashboard">View teststuff</Link></p>
                ) : (
                    <p>
                        
                    </p>
                )}
        </React.Fragment>
    )
}

export default Home;