import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { addHabit } from "../actions/";

class HabitForm extends Component {
  state = {
    habit_text: ""
  };

  handleChanges = e => {
    this.setState({
      habit_text: e.target.value
    });
  };

  addHabit = e => {
    const habit = { user_id: 2, category_id: 2, habit_text: this.state.habit_text };
    console.log(habit);
    e.preventDefault();
    this.props.addHabit(habit);
    console.log(this.props.addHabit);
    this.props.history.push("/habitlist");
  };

  render() {
    console.log(this.props);
    return (
      <div class="mainDiv">
        <div class="addDiv">
          <form class="addForm" onSubmit={this.addHabit}>
            <h2>Add New Habit</h2>
            <input
              type="text"
              name="habit_text"
              placeholder="Habit"
              required
              onChange={this.handleChanges}
              value={this.state.habit_text}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addHabit: state.addHabit
});

export default connect(
  mapStateToProps,
  { addHabit }
)(HabitForm);
