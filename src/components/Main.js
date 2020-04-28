import React from "react";
import Form from "../containers/Form"
import { Provider } from "react-redux";
import store from "../redux/store";


const Main = () => (
  <Provider store={store}>
    <Form/>
  </Provider>
);

export default Main;
