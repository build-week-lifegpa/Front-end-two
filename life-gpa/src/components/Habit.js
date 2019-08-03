import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions";
import { withRouter } from "react-router-dom";
import "../App.css";

class Habit extends Component {
  state = {
    completed: false,
    points: 0
  };

  toggle = () => {
    this.setState({ completed: !this.state.completed });
    this.props.togglePoints()
    this.props.lifegpa()
  };

  render() {
    return (
      <div class="mainDiv">
        <div class="card">
          <div class="wordDiv">
            <h1 className={this.state.completed && "completed"}>
              {this.props.name}
            </h1>
            <button onClick={this.toggle} disabled={this.state.completed?true: null}>
              {this.state.completed ? "undo" : "completed"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  habits: state.habits
});

export default withRouter(
  connect(
    mapStateToProps,
    { getHabits }
  )(Habit)
);
