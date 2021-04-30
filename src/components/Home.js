import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,Nav } from 'react-bootstrap';

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar>
            <div className="container">
        

                <h1>HomeTest</h1>
                <h1>SHOP</h1>
                <button>Test</button>
                {currentUser ? (
                    <p>You are logged in - <Link to="/Dashboard">View teststuff</Link></p>
                ) : (
                    <p>
                        <Link to="/LogIn" className="btn btn-primary">Log In</Link> or <Link to="/SignUp" className="btn btn-success">Sign Up</Link>
                    </p>
                )}
            </div>
        </React.Fragment>
    )
}

export default Home;