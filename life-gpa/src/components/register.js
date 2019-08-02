import React, { Component } from "react";
import { connect } from "react-redux";
import login1 from './styling/login.svg'
import lifegpa from './styling/LifeGpa.svg'
import { register } from "../actions";
import logo from "./styling/logo.svg"
import './styling/register.scss'
import {Link} from "react-router-dom"

class Register extends Component {
  state = {
    newCredentials: {
      username: "",
      password: ""
    }
  };

  changeHandler = e => {
    this.setState({
      newCredentials: {
        ...this.state.newCredentials,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state.newCredentials).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>REGISTERING...</p>;
    }
    return (
      <div class="mainDiv">
        <div className="logo_container">
          <Link to="./AppHome"><img className="arrow" src={login1}></img></Link>
          <img className="logo" src={logo}></img>
          <img className="lifegpa" src={lifegpa}></img>
        </div>
          <div class='spacer'></div>
        
        <div class="registerDiv">
          <form onSubmit={this.register} class="registerForm">
            <h2>Sign Up</h2>
            <input
              type="text"
              name="username"
              value={this.state.newCredentials.username}
              onChange={this.changeHandler}
              placeholder="Username"
            />
            <label>Please enter a username</label>
            <input
              type="password"
              name="password"
              value={this.state.newCredentials.password}
              onChange={this.changeHandler}
              placeholder="Password"
            />
            <label>Please enter a password</label>
            <button onClick={this.register} class="buttonStyle">
              Sign Up
            </button>
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
  { register }
)(Register);
