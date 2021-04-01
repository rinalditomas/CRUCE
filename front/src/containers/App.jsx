import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Home from "../Home";
import Login from "../components/Login";
import Main from "../components/SelectButtons";
import Home from "../components/Home";
import Footer from "../components/Footer";
import DataLoading from "../components/DataLoading";
import ListCadeterias from "../components/ListCadeterias";
import CadeteriaRequest from "../components/CadeteriaRequest";
import ListCadetes from "../components/ListCadetes";
// import Cadete from "../Cadete";
// import Cadeteria from "../Cadeteria";
// import Admin from "../Admin";
// import SingleCadete from "../SingleCadete";
import adminPanel from "../privateComponents/adminPanel";

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"))
/* const user = 'ivan' */

token
  ? console.log("El usuario esta logueado")
  : console.log("no estas logueado");

export default function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Switch>
        {/*  <Route exact path="/home" component={Home}/> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Main} />
        <Route exact path="/cadete" />

        {/* <Route
          path="/cadete/:id"
          render={({ match }) => <SingleCadete cadeteId={match.params.id} />}
        /> */}
        <Route exact path="/cadeteria" />
        <Route exact path="/admin" component={adminPanel} />
        <Route exact path="/admin/uploadorders" component={DataLoading} />
        <Route exact path="/admin/listCadeterias" component={ListCadeterias} />
        <Route
          exact
          path="/admin/cadeteriaRequest"
          component={CadeteriaRequest}
        />
        <Route exact path="/admin/listCadetes" component={ListCadetes} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}
