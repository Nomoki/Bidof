import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Auth';

const TestHome = () => {
    const { currenUser } = useContext(AuthContext);

    return (
        <React.Fragment>
            <div className="container mt-5">
                <h1>HomeTest</h1>
                {currenUser ? (
                    <p>You are logged in - <Link to="/Testsignupandin">View teststuff</Link></p>
                ) : (
                    <p>
                        <Link to="/login" className="btn btn-primary">Log In</Link> or <Link to="/signup" className="btn btn-success">Sign Up</Link>
                    </p>
                )}
            </div>
        </React.Fragment>
    )
}

export default TestHome;