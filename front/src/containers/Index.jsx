import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, fetchMe } from "../state/user";
import { Redirect } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";

const Index = () => {
  const user = useSelector((state) => state.cadete);
  const dispatch = useDispatch();




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
