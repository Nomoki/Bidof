import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Navbar,Nav,ButtonGroup,Carousel} from 'react-bootstrap';
import logo from './bidoflogo.png';
import './style.css';
import { Toy, Elect, Food, Fasions, Automotive, Books } from './Category';



const Home = () => {
    const { currentUser } = useAuth();

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
    
    const catElec = (e) => {
        e.preventDefault();
        setCatChange2(!catChange2);

    }

    const catFood = (e) => {
        e.preventDefault();
        setCatChange3(!catChange3);

    }

    const catFasion = (e) => {
        e.preventDefault();
        setCatChange4(!catChange4);

    }

    const catAutomotive = (e) => {
        e.preventDefault();
        setCatChange5(!catChange5);

    }

    const catBooks = (e) => {
        e.preventDefault();
        setCatChange6(!catChange6);

    }
    

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
            {(!catChange && !catChange2 && !catChange3 && !catChange4 && !catChange5 && !catChange6) ? 
                (<div className="btncat">
                <Button variant="secondary" size="lg" className="btnbox" onClick={catToy}>
                    TOYS
                </Button>
                <Button variant="secondary" size="lg" className="btnbox" onClick={catElec}>
                    Electronic
                </Button>
                <Button variant="secondary" size="lg" className="btnbox" onClick={catFood}>
                    Food & Beverage
                </Button>
                <Button variant="secondary" size="lg" className="btnbox" onClick={catFasion}>
                    Fashion
                </Button>
                <Button variant="secondary" size="lg" className="btnbox" onClick={catAutomotive}>
                    Automotive
                </Button>
                <Button variant="secondary" size="lg" className="btnbox" onClick={catBooks}>
                    BOOKS
                </Button>
                </div>) :
                (
                <>
                <Toy catChange={catChange} setCatChange={setCatChange}/>
                <Elect catChange2={catChange2} setCatChange2={setCatChange2}/>
                <Food catChange3={catChange3} setCatChange3={setCatChange3}/>
                <Fasions catChange4={catChange4} setCatChange4={setCatChange4}/>
                <Automotive catChange5={catChange5} setCatChange5={setCatChange5}/>
                <Books catChange6={catChange6} setCatChange6={setCatChange6}/>
                </>
                )
                
                
            }
              
                <Route path="/"></Route>
   
            
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