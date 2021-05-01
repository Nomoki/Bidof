import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render () {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/LogIn" component={LogIn}/>
            <Route exact path="/Forgot-Password" component={ForgotPassword}/>
          </Switch>
        </Router>
      </AuthProvider>
    );
  };
}

export default App;
