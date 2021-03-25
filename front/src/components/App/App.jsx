
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../App/Navbar";
// import Home from "../Home";
import Login from "../Users/Login";
import Main from '../Users/Main'
import Home from "./Home";
import Prueba from "./prueba"
// import Cadete from "../Cadete";
// import Cadeteria from "../Cadeteria";
// import Admin from "../Admin";
// import SingleCadete from "../SingleCadete";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register" component={Main}/>
        <Route exact path="/prueba" component={Prueba}/>
        <Route exact path="/cadete" />
        {/* <Route
          path="/cadete/:id"
          render={({ match }) => <SingleCadete cadeteId={match.params.id} />}
        /> */}
        <Route exact path="/cadeteria" />
        <Route exact path="/admin" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}