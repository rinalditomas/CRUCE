import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Main from "../components/SelectButtons";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user);

  user && user.admin ? console.log("Eres admin") : console.log("NO eres admin");

  console.log("USUARIO EN APP =====>", user);

  return (
    <div>
      <Navbar />

   
        <>
          <Switch>
            {user && user.admin && <Redirect from="/" to="/admin" />}
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Main} />
            <Route exact path="/cadete" />
            <Route exact path="/cadeteria" />
            <Redirect to="/" />
          </Switch>
        </>
  

      <Footer />
    </div>
  );
}
