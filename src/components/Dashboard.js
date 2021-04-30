import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Dashboard = () => {

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
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

    return (
        <div>
            <div className="container mt-5">
                <h1>Welcome</h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <p>This is your email : </p>{currentUser.email} <br/>
                <button onClick={handleLogout} className="btn btn-danger">Sign Out</button>
            </div>
        </div>
    )
}

export default Dashboard;