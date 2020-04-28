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


const App = () => (

  <Router>
    <ul>
      <li><NavLink exact to="/" activeStyle={{ color: "red", fontWeight: "bold" }} >All</NavLink></li>
      <li><NavLink to="/done" activeStyle={{ color: "red", fontWeight: "bold" }}>Done</NavLink></li>
      <li><NavLink to="/not-done" activeStyle={{ color: "red", fontWeight: "bold" }}>Not-Done</NavLink></li>
    </ul>
    <Switch>
      <Route path="/:filter?" component={Main} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
