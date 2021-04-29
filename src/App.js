import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hometest from './components/Hometest';
import Testsignupandin from './components/Testsignupandin';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Hometest}/>
          <Route exact path="/Testsignupandin" component={Testsignupandin}/>
          <Route exact path="/LogIn" component={LogIn}/>
          <Route exact path="/SignUp" component={SignUp}/>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
