import React, { useEffect, useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import useStyles from "../utils/stylesRegister";
import Copyright from "../utils/Copyright";
import { useSnackbar } from "notistack";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { registerCadeteria } from "../state/cadeteria";

export const Cadeteria = () => {
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const history = useHistory();

  const [input, setInput] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [key]: value });
  };


  


  const handleSubmit = (e) => {
    console.log('click register')
    e.preventDefault();
    dispatch(registerCadeteria(input))
      .then(({ payload }) => {
        console.log('payload register cadeteria', payload)
        const r = payload.errors[0].message;
        if (payload.errors)
          enqueueSnackbar(`${r}`, {
            variant: "error",
          });
      })
      .catch((err) => {
        enqueueSnackbar("Cadeteria registrada", {
          variant: "success",
        }) && history.push("/login");
      });
  };

  return (
    <div style={{ paddingTop: "2rem" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro de Cadeteria
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Nombre de la empresa"
                  name="nameCompany"
                  autoComplete="nameCompany"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="CUIT"
                  label="CUIT"
                  name="CUIT"
                  autoComplete="CUIT"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Direccion"
                  name="address"
                  autoComplete="address"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNum"
                  label="+54"
                  name="phoneNum"
                  autoComplete="phoneNum"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Ya estas registrado? Logueate.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};
