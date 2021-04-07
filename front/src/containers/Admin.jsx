import React, {useEffect} from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

import Footer from "../components/Footer";
import DataLoading from "../components/DataLoading";
import ListCadeterias from "../components/Admin/ListCadeterias";
import ListCadetes from "../components/Admin/ListCadetes";
import CadeteriaRequest from "../components/Cadeteria/CadeteriaRequest";
import { useSelector , useDispatch} from "react-redux";
import {setUser,fetchMe} from '../state/user'

import adminPanel from "../components/Admin/AdminPanel";

export default function App() {
  const user = useSelector((state) => state.cadete);
  const dispatch = useDispatch();


  return (
    <div>
      <Navbar />
      {!user ? (
        <>
          <h1>No existe el usuario</h1>
        </>
      ) : (
        <>
          <Switch>
            {user && !user.admin && <Redirect from="/admin" to="/" />}
            <Route exact path="/admin" component={adminPanel} />
            <Route exact path="/admin/uploadorders" component={DataLoading} />
            <Route exact path="/admin/ListCadetes" component={ListCadetes} />
            <Route
              exact
              path="/admin/listCadeterias"
              component={ListCadeterias}
            />
            <Route
              exact
              path="/admin/cadeteriaRequest"
              component={CadeteriaRequest}
            />
            <Redirect to="/admin" />
          </Switch>
        </>
      )}
      <Footer />
    </div>
  );
}
