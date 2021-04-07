import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Main from "../components/SelectButtons";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import CadeteOrders from "../components/Cadete/CadeteOrders";
import SingleOrder from "../components/Cadete/SingleOrder";
import Home from "../components/Home";
import ProfileCadete from "../components/Cadete/ProfileCadete";

import { fetchMe } from "../state/user";

export default function App() {
  const user = useSelector((state) => state.cadete);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  return (
    <div>
      <Navbar />
      <>
        <Switch>
          {user && user.admin && <Redirect from="/" to="/admin" />}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Main} />
          <Route exact path="/cadete" />
          <Route exact path="/cadeteOrders" component={CadeteOrders} />
          <Route exact path="/profileCadete" component={ProfileCadete} />
          <Route
            exact
            path="/singleOrder/:id"
            render={({ match }) => <SingleOrder match={match.params.id} />}
          />
          <Redirect to="/" />
        </Switch>
      </>
      <Footer />
    </div>
  );
}
