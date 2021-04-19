import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../state/users";
import useStyles from "../utils/stylesNavbar";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { useSnackbar } from "notistack";
import messagesHandler from "../utils/messagesHandler";
import { Menu, MenuItem } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const location = useLocation().pathname.split("/");

  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.users.user);
  const cadeteria = useSelector((state) => state.cadeterias.singleCadeteria);

  const messages = messagesHandler(useSnackbar());

  const logoutUser = () => {
    localStorage.removeItem("token");
    handleMobileMenuClose();
    dispatch(logout()) && messages.info();
    history.push("/");
  };

  const userTypeColor = (color = "") => {
    if (location.includes("admin")) return "admin";
    if (location.includes("cadeteria")) return "cadeteria";
    if (location.includes("cadete")) return "cadete";
    return "base";
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* {nombreUsuario ? (
            <Avatar alt="Remy Sharp" src="cata.jpg" />
          ) : (
            <AccountCircle />
          )} */}
        </IconButton>
      </MenuItem>

      {!token ? (
        <>
          <MenuItem>
            <Link
              to="/login-as"
              style={{ color: "inherit" }}
              onClick={handleMobileMenuClose}
            >
              <Button color="inherit">Login</Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/register-as"
              style={{ color: "inherit" }}
              onClick={handleMobileMenuClose}
            >
              <Button color="inherit">Register</Button>
            </Link>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem>
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          </MenuItem>
        </>
      )}
      <MenuItem>
        <Link
          to="/"
          style={{ color: "inherit" }}
          onClick={handleMobileMenuClose}
        >
          <Button color="inherit">Home</Button>
        </Link>
      </MenuItem>
      {user && user.admin ? (
        <>
          <MenuItem>
            <Link
              to="/admin"
              style={{ color: "inherit" }}
              onClick={handleMobileMenuClose}
            >
              <Button color="inherit">admin panel</Button>
            </Link>
          </MenuItem>
        </>
      ) : (
        <></>
      )}
    </Menu>
  );

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes[`${userTypeColor()}`]}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {user ? `Hola ${user.firstName}` : null}
            {cadeteria ? cadeteria.nameCompany : null}
          </Typography>
          <div className={classes.sectionDesktop}>
            {!token ? (
              <>
                <Link to="/login-as" style={{ color: "inherit" }}>
                  <Button color="inherit">Login</Button>
                </Link>
                <Link to="/register-as" style={{ color: "inherit" }}>
                  <Button color="inherit">Register</Button>
                </Link>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={logoutUser}>
                  Logout
                </Button>
              </>
            )}

            <Link to="/" style={{ color: "inherit" }}>
              <Button color="inherit">Home</Button>
            </Link>
            {user && user.admin ? (
              <>
                <Link to="/admin" style={{ color: "inherit" }}>
                  <Button color="inherit">admin panel</Button>
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {user || cadeteria ? <AccountCircle /> : <MoreIcon />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
export default Navbar;
