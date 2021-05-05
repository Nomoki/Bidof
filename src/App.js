import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offer from './components/Offers';
import Profile from './components/Profiles';
import CreateBidPost from './components/CreateBidPosts';
import CreateOfferPost from './components/CreateOfferPosts';
import ViewProduct from './components/ViewProducts';
import Chat from './components/Chats';
import RoomList from './components/RoomList';
import Login from './components/Loginch';
import ChatRoom from './components/ChatRoom';
import AddRoom from './components/AddRoom';

class App extends Component {
  render () {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Offers" component={Offer}/>
            <PrivateRoute exact path="/Profiles" component={Profile}/>
            <PrivateRoute exact path="/CreateBidPosts" component={CreateBidPost}/>
            <PrivateRoute exact path="/CreateOfferPosts" component={CreateOfferPost}/>
            <Route exact path="/ViewProducts" component={ViewProduct}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/LogIn" component={LogIn}/>
            <Route exact path="/Forgot-Password" component={ForgotPassword}/>
            <Route exact path="/Chats" component={Chat}/>
            <Route exact path="/RoomList" component={RoomList}/>
            <Route exact path="/Loginch" component={Login}/>
            <Route exact path="/ChatRoom" component={ChatRoom}/>
            <Route exact path="/AddRoom" component={AddRoom}/>
          </Switch>
        </Router>
      </AuthProvider>
    );
  };
}

export default App;
