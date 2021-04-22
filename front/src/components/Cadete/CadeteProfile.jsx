import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  Container,
  CssBaseline,
  Avatar,
  Link,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { InputLabel } from "@material-ui/core";
import { editProfileUser } from "../../state/users";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { fetchMe } from "../../state/users";

import useStyles from "../../utils/stylesCadeteProfile";
import { useSnackbar } from "notistack";
import messageHandler from "../../utils/messagesHandler";

export default function ProfileCadete() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const [input, setInput] = useState({});
  const history = useHistory();

  const messages = messageHandler(useSnackbar());

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [key]: value });
  };

  const classes = useStyles();

  const editCadete = (e) => {
    e.preventDefault();
    const id = user.id;
    dispatch(editProfileUser({ id, input })).then(({ payload }) => {
      if (!payload.errors) {
        messages.info("Datos actualizados");
        dispatch(fetchMe()) && history.push("/cadete");
      } else {
        payload.errors.map((e) => messages.error(e.message)) &&
          dispatch(fetchMe());
      }
    });
  };


  return (
    <Container component="main" maxWidth="xs" style={{ padding: 25 }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Editar perfil.
        </Typography>
        <form className={classes.form} noValidate>
          <Grid
            container
            spacing={8}
            style={{
              display: "grid",
              placeItems: "left",
              placeContent: "left",
            }}
          >
            <Grid item xs={12}>
              <TextField
                name="firstName"
                id="nombre"
                label="Nombre"
                fullWidth
                placeholder={user && user.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="lastName"
                label="Apellido"
                id="apellido"
                autoComplete="lname"
                fullWidth
                placeholder={user && user.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="phoneNum"
                id="phoneNum"
                label="Número de teléfono"
                fullWidth
                placeholder={user && user.phoneNum}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={10}>
              <br></br>
              <InputLabel
                style={{ textTransform: "capitalize" }}
                id="demo-simple-select-filled-label"
              >
                {input.vehicle == null ? user.vehicle : input.vehicle}
              </InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-filled-label"
                name="vehicle"
                id="demo-simple-select-filled"
                onChange={handleChange}
              >
                <MenuItem value="moto" key={1}>
                  Moto
                </MenuItem>
                <MenuItem value="bicicleta" key={2}>
                  Bicicleta
                </MenuItem>
                <MenuItem value="auto" key={3}>
                  Auto
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
          <br></br>
          <br />

          <Button
            type="submit"
            variant="contained"
            onClick={editCadete}
            className={classes.button}
          >
            Editar
          </Button>
        </form>
      </div>
    </Container>
  );
}

