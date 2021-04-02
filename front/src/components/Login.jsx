import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Copyright from "../utils/Copyright";
import useStyles from "../utils/stylesLogins";

import { useDispatch } from "react-redux";
import axios from "axios";

import { loginRequest } from "../state/user";
import { fetchMe } from "../state/user";

export default function Login() {
  const classes = useStyles();

  const [input, setInput] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };

  ////Patch

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("login exitoso");
        const check = dispatch(fetchMe()).payload;
        check && check.admin ? history.push("/admin") : history.push("/");
      })
      .catch((err) => alert("no ha sido posible loguearte"));

  };

  ///Original
  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = input;
      const login = await dispatch(loginRequest({ email, password }));
      const check = await dispatch(fetchMe()).payload;
      check && check.admin ? history.push("/admin") : history.push("/");
    } catch (e) {
      console.log("ERROR EN  LOGIN COMPONENT==>", e);
    }
  }; */

  
  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={input.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={input.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/adminlogin" variant="body2">
                    Administrador?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register">{"No tienes cuenta? Registrate"}</Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
