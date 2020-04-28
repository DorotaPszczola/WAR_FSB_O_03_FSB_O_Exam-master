import { combineReducers } from "redux";
import { ADD_TODO, TODO_TOGGLED, TODO_REMOVED } from "./actions"

const toDoInit = [{
  title: "Nazwa elementu",
  done: false
},
{
  title: "Jakiś task zrobiony",  // nazwa elementu
  done: true               // flaga oznaczająca czy element został wykonany, na początku ustawiona na false
}]

const todos = (state = toDoInit, action) => {
  switch (action.type) {
    case ADD_TODO:

      return ([
        ...state,
        {
          title: action.title,
          done: false
        }]
      )
    case TODO_TOGGLED:
      let newState = [...state];
      newState.forEach(todo => {
        // if (todo.title === action.payload) {
        if (todo.title === action.payload.title) {
          todo.done = !todo.done
        }
      })
      return newState;
    case TODO_REMOVED:
      const toDos = state.filter(item => item.title !== action.payload)

      return ([
        ...toDos
      ]);
    default:
      return state;
  }
};

export default combineReducers({
  todos
});
// D:\CodersLab\React_Redux\Theory\repos\src\redux\reducers\todo.js