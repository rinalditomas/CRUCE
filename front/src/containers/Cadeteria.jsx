import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Login";

import Footer from "../components/Footer";
import CadeteriaRequest from "../components/Cadeteria/CadeteriaRequest";
import { useSelector, useDispatch } from "react-redux";
import { setUser, fetchMe } from "../state/user";

import ProfileCadeteria from "../components/Cadeteria/ProfileCadeteria";
import CadeteriaPanel from "../components/Cadeteria/CadeteriaPanel";

import ListOrders from "../components/Cadeteria/ListOrders";
import ListCadetes from "../components/Admin/ListCadetes";
import Metricas from "../components/Metricas";
import CadeteRequest from "../components/Cadeteria/CadeteRequest";

import CadeteriaLogin from "../components/Cadeteria/CadeteriaLogin";
import CadeteriaNavbar from "../components/Cadeteria/CadeteriaNavbar";

import { fetchCad } from "../state/cadeteria";

export default function Cadeteria() {
  const user = useSelector((state) => state.cadete);
  const dispatch = useDispatch();

  /*   const cadeteria = {companyName: 'JustEat'} */
  const cadeteria = useSelector((state) => state.cadeteria);




  console.log('CADETERIA EN MAIN CAD', cadeteria)

  return (
    <div>
      <>
        <CadeteriaNavbar />
        <Switch>
          {/* {!user && <Redirect from="/" to="/cadeteria" />} */}
          <Route exact path="/cadeteria" component={CadeteriaPanel} />
          <Route exact path="/cadeteria/login" component={CadeteriaLogin} />
          <Route exact path="/cadeteria/perfil" component={ProfileCadeteria} />
          <Route exact path="/cadeteria/listOrders" component={ListOrders} />
          <Route exact path="/cadeteria/listCadetes" component={ListCadetes} />
          <Route
            exact
            path="/cadeteria/solicitudes"
            component={CadeteRequest}
          />
          <Route
            exact
            path="/cadeteria/metricas"
            component={ProfileCadeteria}
          />
        </Switch>
      </>
      <Footer />
    </div>
  );
}
