import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render () {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/LogIn" component={LogIn}/>
            <Route exact path="/SignUp" component={SignUp}/>
          </Switch>
        </Router>
      </AuthProvider>
    );
  };
}

export default App;
