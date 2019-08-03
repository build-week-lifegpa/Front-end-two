import React from "react";

import axios from "axios";

import axiosWithAuth from "../components/axiosWithAuth"

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post("https://life-gpa-backend.herokuapp.com/api/register", creds, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://life-gpa-backend.herokuapp.com/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.id);
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getHabits = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://life-gpa-backend.herokuapp.com/api/habits/users/2", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res)
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const ADD_HABIT_START = "ADD_ARTICLE_START"
export const ADD_HABIT_SUCCESS = "ADD_ARTICLE_SUCCESS"
export const ADD_HABIT_FAILURE = "ADD_ARTICLE_FAILURE"

export const addHabit = (habit) => dispatch => {
    dispatch({ type: ADD_HABIT_START })
    axiosWithAuth()
        .post('https://life-gpa-backend.herokuapp.com/api/habits', habit)
        .then(res => {
            console.log("add habit success")
            dispatch({ type: ADD_HABIT_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("failed", err)
            dispatch({ type: ADD_HABIT_FAILURE, payload: err})
        })
}

