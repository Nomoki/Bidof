import React, { useState, useRef } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match');
        }
        
        try{
           setError('');
           setLoading(true);
           await signup(emailRef.current.value, passwordRef.current.value);
           history.push("/")
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }

    // if (currentUser) {
    //     return <Redirect to="/" />
    // }
    
    return (
        <React.Fragment>
            <Container className="mt-5">
            {error && <Alert variant="danger">{error}</Alert>}
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password"  ref={passwordRef} className="form-control" id="exampleInputPassword" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password Confirmation</label>
                    <input type="password" name="passwordconfirm"  ref={passwordConfirmRef} className="form-control" id="exampleInputPasswordcon" required/>
                </div>
                <button type="submit" disabled={loading} className="btn btn-primary">Submit</button>
            </form>
            </Container>
        </React.Fragment>
    )
}

export default SignUp;