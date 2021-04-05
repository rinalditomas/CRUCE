import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Main from "../components/SelectButtons";
import Footer from "../components/Footer";
import {useDispatch,useSelector} from "react-redux"
import { sendToken } from "../state/user";




import CadeteOrders from "../cadeteComponent/CadeteOrders";
import SingleOrder from "../cadeteComponent/SingleOrder";
import userReducer from "../state/user";



export default function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.cadete);


  useEffect(() => {
    if(token){
      dispatch(sendToken(token))
    }
  }, []);


  user && user.admin ? console.log("Eres admin") : console.log("NO eres admin");

  

  return (
    <div>
      <Navbar />
      <>
        <Switch>
          {user && user.admin && <Redirect from="/" to="/admin" />}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Main} />
          <Route exact path="/cadete" />
          <Route exact path="/cadeteOrders" component={CadeteOrders} />
          <Route exact path="/cadeteria" />
          <Route
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
