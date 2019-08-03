import React from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  NavLink
} from "react-router-dom";

import Register from "./components/register";
import Login from "./components/login";
import PrivateRouter from "./components/privaterouter";
import habitListView from "./components/habitListView";

function App() {
  return (
    <div className="App">
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/" render={props => <Login {...props} />} />
      <PrivateRouter path="/habitlist" component={habitListView}/>
    </div>
  );
}

export default withRouter(App);
