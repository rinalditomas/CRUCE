
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Home from "../Home";
import Login from "../components/Login";
import Main from '../components/SelectButtons'
import Home from "../components/Home";
import Footer from "../components/Footer";
import DataLoading from "../components/DataLoading"
// import Cadete from "../Cadete";
// import Cadeteria from "../Cadeteria";
// import Admin from "../Admin";
// import SingleCadete from "../SingleCadete";
import adminPanel from "../privateComponents/adminPanel"

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

token
  ? console.log("El usuario esta logueado")
  : console.log("no estas logueado");


export default function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Switch>
       {/*  <Route exact path="/home" component={Home}/> */}
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/register" component={Main}/>
        <Route exact path="/cadete" />

        {/* <Route
          path="/cadete/:id"
          render={({ match }) => <SingleCadete cadeteId={match.params.id} />}
        /> */}
        <Route exact path="/cadeteria" />
        <Route exact path="/admin" component= {adminPanel}/>
        <Route exact path="/admin/uploadorders" component= {DataLoading}/>
        <Redirect to="/" />
      </Switch>
     <Footer/>
    </div>
  );
}

