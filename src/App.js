import React, {Component, Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
const Home = lazy(() => import('./components/Home'));
const LogIn = lazy(() => import('./components/LogIn'));
const SignUp = lazy(() => import('./components/SignUp'));
const ForgotPassword = lazy(() => import('./components/ForgotPassword'));
const AuthProvider = lazy(() => import('./components/AuthProvider'));
const PrivateRoute = lazy(() => import('./components/PrivateRoute'));
const Offer = lazy(() => import('./components/Offers'));
const Profile = lazy(() => import('./components/Profiles'));
const CreateBidPost = lazy(() => import('./components/CreateBidPosts'));
const CreateOfferPost = lazy(() => import('./components/CreateOfferPosts'));
const ViewProduct = lazy(() => import('./components/ViewProducts'));
const RoomList = lazy(() => import('./components/RoomList'));
const ChatRoom = lazy(() => import('./components/ChatRoom'));
const AddRoom = lazy(() => import('./components/AddRoom'));
const ViewProfile = lazy(() => import('./components/ViewProfiles'));


class App extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner />}>
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
            <Route exact path="/ViewProfiles" component={ViewProfile}/>
            <PrivateRoute exact path="/RoomList" component={RoomList}/>
            <PrivateRoute exact path="/ChatRoom/:room" component={ChatRoom}/>
            <PrivateRoute exact path="/AddRoom" component={AddRoom}/>
          </Switch>
          
        </Router>
      </AuthProvider>
      </Suspense>
     
    );
  };
}

export default App;
