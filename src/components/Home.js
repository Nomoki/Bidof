import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <React.Fragment>
            <div className="container mt-5">
                <h1>HomeTest</h1>
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