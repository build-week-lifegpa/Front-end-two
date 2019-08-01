import React from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  NavLink
} from "react-router-dom";
import './App.scss'
import Register from "./components/register";
import Login from "./components/login";
import PrivateRouter from "./components/privaterouter";
import Protected from "./components/protected";
import AppHome from './components/AppHome';


function App() {
  return (
    <div className="App">
      <Route path="/AppHome" component={AppHome} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRouter path="/protected" component={Protected}/>
    </div>
  );
}

export default withRouter(App);
