import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";

import useStyles from "../utils/stylesResetPass";
import Copyright from "../utils/Copyright";
import { useSnackbar } from "notistack";
import { resetPassword } from "../state/resetPassword";
import messagesHandler from '../utils/messagesHandler'

const ResetPassword = () => {
  const classes = useStyles();
  const params = useParams();
  const token = params.token;

  const messages = messagesHandler(useSnackbar());
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [key]: value });
  };

  const handleSubmit = (event, input, token) => {
    event.preventDefault();
    const { newPass, passConfirm } = input;
    if (newPass === passConfirm) {
      resetPassword(newPass, token);
      messages.success("coinciden, password actualizada");
    } else {
      messages.error("las passwords no coinciden");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Password reset
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => handleSubmit(e, input, token)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newPass"
            label="New password"
            type="password"
            id="newPass"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="passConfirm"
            label="Confirm password"
            name="passConfirm"
            type="password"
            autoComplete="confirm password"
            autoFocus
            onChange={handleChange}
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
          <Grid container></Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default ResetPassword;
