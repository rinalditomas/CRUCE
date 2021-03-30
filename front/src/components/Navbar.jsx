import React, { useEffect, useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";

import useStyles from "../utils/stylesNavbar";

const Navbar = () => {

  const classes = useStyles();
  const history = useHistory();
  const [log, setLog] = useState(false);

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {!token ? (
            <>
              <Link to="/login" style={{ color: "inherit" }}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/register" style={{ color: "inherit" }}>
                <Button color="inherit">Register</Button>
              </Link>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          )}

          <Link to="/home" style={{ color: "inherit" }}>
            <Button color="inherit">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
