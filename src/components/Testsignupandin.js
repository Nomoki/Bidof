import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';
import firebaseConfig from '../config';

const Testsignupandin = () => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Welcome</h1>
                <p>This is teststuff if you can see this you're logged in</p>
                <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )
}

export default Testsignupandin;