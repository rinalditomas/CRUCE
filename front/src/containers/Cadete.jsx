import React from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import CadeteOrders from "../components/Cadete/CadeteOrders";



import Error from "../components/Error";

export default function Cadete() {
  const user = useSelector((state) => state.cadete);
  return (
    <div>
      <Navbar />
      {user && !user.admin ? <CadeteOrders/> : <Error />}
      <Footer />
    </div>
  );
}
