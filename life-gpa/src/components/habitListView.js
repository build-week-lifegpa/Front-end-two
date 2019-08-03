import React, { Component } from "react";
import { connect } from "react-redux";
import { getHabits } from "../actions";
import { withRouter } from "react-router-dom";
import Habit from "../components/Habit";
import HabitForm from "./habitForm";

class HabitListView extends Component {
  state = {
    points: 0,
    gpa: 0,
    completed: true
  };

  togglePoints = () => {
      this.setState({points: ++this.state.points})
  };

  lifegpa = () => {
    let gpa = (this.state.points / this.props.habits.length) * 100;
    this.setState({ gpa: gpa });
  };

  componentDidMount() {
    this.props.getHabits();
  }

  render() {
    console.log(this.props.isFetching);
    return (
      <>
        <h1>Life Gpa: {this.state.gpa}%</h1>
        <HabitForm history={this.props.history} />
        {this.props.isFetching ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.props.habits.map(habit => {
              return (
                <div>
                  <Habit
                    name={habit.habit_text}
                    completed={this.state.completed}
                    togglePoints={this.togglePoints}
                    pointsCompleted={this.state.completed}
                    lifegpa={this.lifegpa}
                  />
                </div>
              );
            })}
          </div>
        )}
      </>
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
  )(HabitListView)
);
