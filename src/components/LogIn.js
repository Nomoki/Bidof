import React, { useState, useRef } from 'react';
import { useAuth } from './AuthContext';
import { Container, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LogIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try{
           setError('');
           setLoading(true);
           await login(emailRef.current.value, passwordRef.current.value);
           history.push("/");
        } catch {
            setError('Failed to to log in');
        }
        setLoading(false);
    }

    return (
        <React.Fragment>
            <Container className="mt-5">
            <h1>Log In</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit"  disabled={loading} className="btn btn-primary">Submit</button>
            </form>
            </Container>
        </React.Fragment>
    )

}

export default LogIn;

