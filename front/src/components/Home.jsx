import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import HomeNavbar from "./HomeNavbar";

import { useHistory } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  
  },


}));

const Home = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <HomeNavbar />
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} elevation={2} square>
          <div className={classes.paper}>
            <img
              style={{
                width: "135%",
                borderRadius: "5rem",
                minWidth: "100%",
                marginTop: "2rem",
              }}
              src="https://image.freepik.com/foto-gratis/servicio-mensajeria-joven-que-recibe-paquete-repartidor_38391-600.jpg"
              alt="s"
            ></img>
            <Button variant="contained" size="large" className={classes.margin} onClick={() => history.push("/select")} >
              Registro
            </Button>
            <Button
              onClick={() => history.push("/login")}
              variant="contained"
              size="large"
              className={classes.margin}
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
