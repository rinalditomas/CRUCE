import React from "react";

import { useSelector, useDispatch } from "react-redux";


import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";


import { makeStyles } from "@material-ui/core/styles";

import HomeNavbar from "./HomeNavbar";

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
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
