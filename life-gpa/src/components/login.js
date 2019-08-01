import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./styling/logo.svg"
import { login } from "../actions";
import {ReactComponent as Login1} from './styling/login.svg'
import {ReactComponent as LifeGpa} from './styling/LifeGpa.svg'

import './styling/login.scss'

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>LOGGING IN...</p>;
    }
    return (
      
      <div className="mainDiv">
        <div className="logo_container">
        {/* <img className="arrow" src={login1}></img> */}
        <Login1 className="arrow"/><img className="logo" src={logo}></img>
        {/* <img className="lifegpa" src={lifegpa}></img> */}
        <LifeGpa className="lifegpa"/>
        </div>
        <div class='spacer'></div>
        <div class="loginDiv">
          <form onSubmit={this.login} class="loginForm">
            <h2>Sign In</h2>
            <input class="inputStyle"
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              placeholder="Email"
            />
            <label>Enter your username</label>
            <input class="inputStyle"
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              placeholder="password"
            />
            <label>Enter your password</label>
            <p>Don't have an account?<a href='/register'> Register</a></p>
            <button class="buttonsignIn">Sign In</button>
            
            
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loggingIn: state.loggingIn
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
