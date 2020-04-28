import { combineReducers } from "redux";
import { ADD_TODO } from "./actions"

const initState = []

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:

      return;

    default:
      return state;
  }
  return state;
};

export default combineReducers({
  todos
});
