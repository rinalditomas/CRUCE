import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../state/user";

import App from "./App";
import Admin from "./Admin";

const Index = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  dispatch(setUser(user));

  console.log("User ===>", user);

  return (
    <div>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
};

export default Index;
