import {
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCHING,
  SUCCESS,
  FAILURE,
  ADD_HABIT_START,
  ADD_HABIT_SUCCESS,
  ADD_HABIT_FAILURE
} from "../actions";

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  token: "",
  user: {},
  LoggedInUser: {},
  habits: [],

  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loggingIn: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loggingIn: false,
        user: action.payload
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        LoggedInUser: action.payload
      };
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        habits: action.payload,
        isFetching: false
      };
    case FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      };

    case ADD_HABIT_START:
      return {
        ...state,
        addHabit: true
      };
    case ADD_HABIT_SUCCESS:
      return {
        ...state,
        addHabit: false,
        isLoggedIn: true,
      };
    case ADD_HABIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        err: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
