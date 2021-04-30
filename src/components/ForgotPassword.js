import React, { useState, useRef } from 'react';
import { useAuth } from './AuthContext';
import { Container, Alert } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

const ForgotPassword = () => {

    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        
        try{
           setMessage('');
           setError('');
           setLoading(true);
           await resetPassword(emailRef.current.value);
           setMessage('Check your inbox for further instructions');   
        } catch {
            setError('Failed to to reset password');
        }
        setLoading(false);
    }

    return (
        <React.Fragment>
            <Container className="mt-5">
            <h1>Password Reset</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit"  disabled={loading} className="btn btn-primary">Reset Password</button>
                <div className="mt-3"><Link to="/LogIn">Log In</Link></div>
            </form>
            <div className="mt-3">Need an account? <Link to="/SignUp">Sign Up</Link></div>
            </Container>
        </React.Fragment>
    )

}

export default ForgotPassword;

