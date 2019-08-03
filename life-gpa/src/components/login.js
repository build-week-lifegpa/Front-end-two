import React, { Component } from "react";
import { connect } from "react-redux";

import { login } from "../actions";

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
      this.props.history.push("/habitlist");
    });
  };

  render() {
    if (this.props.isLoggingIn) {
      return <p>LOGGING IN...</p>;
    }
    return (
      <div class="mainDiv">
        <div class="loginDiv">
          <form onSubmit={this.login} class="loginForm">
            <h2>Welcome to Life GPA!</h2>
            <input class="inputStyle"
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              placeholder="username"
            />
            <input class="inputStyle"
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              placeholder="password"
            />
            <button class="buttonStyle">Log In</button>
            <p>Don't have an account?<a href='/register'> Register</a></p>
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
