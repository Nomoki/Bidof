import React,{ useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, ButtonGroup, Carousel, Alert,Form } from 'react-bootstrap';
import logo from './bidoflogo.png';
import './style2.css';
import { Toy, Elect, Food, Fasions, Automotive, Books } from './Category';
import { auth, db } from '../config';
import plus from './plus.png';
import avatar from './avatar.png';

const ViewProduct = () => {
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

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    var pic = getCookie("pic");
    var name = getCookie("name");
    var price = getCookie("price");
    var des = getCookie("des");
     
        
      

    return (
        <div>
        <React.Fragment>
            <Navbar bg="light" variant="light">
                    <Navbar.Brand><Link to="/"><img src={logo} alt="Logo" className="logo" /></Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        {!currentUser ? (
                            <React.Fragment>
                                <Nav.Link>
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
                <img src={pic} className='imgpro'></img>
                <div className="postbox">
                    <h2 className="pronamebox">{name}</h2>

                    <div className="pricebox">
                            <h2 className="pricetag">฿ {price}</h2> 
                    </div>

                    <div className="desbox">
                        <div className="despro">
                            <p className="desprotext">{des}</p>
                        </div>
                    </div>
                </div>

                <div className="proprofile">
                            <img className="avapro" src={avatar}/>
                            <h3 className="Propic">Name</h3>
                            <div className="btnprogrup">
                            <Button variant="light">CHAT</Button>{' '}
                            <Button variant="light">PROFILE</Button>{' '}
                            </div>
                </div>
                </React.Fragment>
        </div>
    )
}

export default ViewProduct
