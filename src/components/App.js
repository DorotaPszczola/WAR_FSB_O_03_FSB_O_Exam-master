import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Main from "./Main";
import NotFound from "./NotFound";
import { Provider } from "react-redux";
import store from "../redux/store";

const activeS = { color: "red", fontWeight: "bold" };

const App = () => (
  <Provider store={store}>
    <Router>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeS} >All</NavLink></li>
        <li><NavLink to="/done" activeStyle={activeS}>Done</NavLink></li>
        <li><NavLink to="/not-done" activeStyle={activeS}>Not-Done</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/:filter?" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>

);

export default App;
