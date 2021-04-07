import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, fetchMe } from "../state/user";
import { Redirect } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Cadeteria from "./Cadeteria";

import { SnackbarProvider } from "notistack";

import { allCadeterias } from "../state/cadeteria";

import {fetchCad} from '../state/cadeteria'


const Index = () => {
  const user = useSelector((state) => state.cadete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCad());
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/cadeteria" component={Cadeteria} />
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
};

export default Index;
