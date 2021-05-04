import React from 'react';
import './Chats.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import Login from './Loginch';
import RoomList from './RoomList';
import AddRoom from './AddRoom';
import ChatRoom from './ChatRoom';

function Chats() {
  let location = useLocation();

  return (
    <Router>
      <div>
        <Redirect
          to={{
            pathname: "/roomlist",
            state: { from: location }
          }}
        />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <SecureRoute path="/roomlist">
            <RoomList />
          </SecureRoute>
          <SecureRoute path="/addroom">
            <AddRoom />
          </SecureRoute>
          <SecureRoute path="/chatroom/:room">
            <ChatRoom />
          </SecureRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default Chats;

function SecureRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem('nickname') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}