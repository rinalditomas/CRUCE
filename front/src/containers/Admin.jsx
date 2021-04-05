import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Main from "../components/SelectButtons";
import Footer from "../components/Footer";
import DataLoading from "../components/DataLoading";
import ListCadeterias from "../components/ListCadeterias";
import ListCadetes from "../components/ListCadetes";
import CadeteriaRequest from "../components/CadeteriaRequest";
import { useSelector, useDispatch } from "react-redux";

import adminPanel from "../privateComponents/adminPanel";

export default function App() {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.cadete);

  return (
    <div>
      <Navbar />
      {!user ? (
        <>
          <Redirect from="/admin" />
        </>
      ) : (
        <>
          <Switch>
            {user && !user.admin && <Redirect from="/admin" to="/" />}
            <Route exact path="/admin/login" component={Login} />
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
