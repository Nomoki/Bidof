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
import firebase from './firebase';
import { Spinner } from 'reactstrap';

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
    var upic = getCookie("picuser");
    var uname = getCookie("nameuser");
    var udesc = getCookie("descuser");

    

    function getCookie2 (e,nauser,piuser,pdesc){
        document.cookie = "namesuser="+nauser;
        document.cookie = "pictureuser="+piuser;
        document.cookie = "desciptuser="+pdesc;
        history.push("/ViewProfiles")
    }

    const creds = { nickname: `${user && user.name}` };
    const [showLoading, setShowLoading] = useState(false);
    const ref = firebase.database().ref('users/');

    const loginchat = (e) => {
        e.preventDefault();
        setShowLoading(true);
        ref.orderByChild('nickname').equalTo(creds.nickname).once('value', snapshot => {
            if (snapshot.exists()) {
                localStorage.setItem('nickname', creds.nickname);
                history.push('/RoomList');
                setShowLoading(false);
            } else {
                const newUser = firebase.database().ref('users/').push();
                newUser.set(creds);
                localStorage.setItem('nickname', creds.nickname);
                history.push('/RoomList');
                setShowLoading(false);
            }
        });
    }

    return (
        <div>
        <React.Fragment>
        {showLoading &&
                <Spinner color="primary" />
            }
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
                <div className="imgview"><img src={pic} className='imgpro'></img></div>
                <div className="postbox">
                    <h2 className="pronamebox">{name}</h2>

                    <div className="pricebox">
                            <h2 className="pricetag">??? {price}</h2> 
                    </div>

                    <div className="desbox">
                        <div className="despro">
                            <p className="desprotext">{des}</p>
                        </div>
                    </div>
                </div>

                <div className="proprofile">
                            <img className="avapro" src={upic}/>
                            <h3 className="Propic">{uname}</h3>
                            <h3 style={{display: "none"}} className="Propic">{udesc}</h3>
                            <div className="btnprogrup">
                            <Button onClick={loginchat} variant="light">CHAT</Button>
                            <Button onClick={(e)=>{getCookie2(e,upic,uname,udesc)}} variant="light">PROFILE</Button>
                            </div>
                </div>
                </React.Fragment>
        </div>
    )
}

export default ViewProduct
