import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../state/users";
import useStyles from "../utils/stylesNavbar";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { useSnackbar } from "notistack";
import messagesHandler from "../utils/messagesHandler";
import { Menu, MenuItem } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Avatar from "@material-ui/core/Avatar";

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
      {!token ? (
        <>
          <MenuItem>
            <Link
              to="/login-as"
              style={{ color: "inherit", textDecoration: "none" }}
              onClick={handleMobileMenuClose}
            >
              <Button color="inherit">Login</Button>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/register-as"
              style={{ color: "inherit", textDecoration: "none" }}
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
          {userTypeColor() !== "admin" && userTypeColor() !== "cadeteria" ? (
            
            <MenuItem>
              <Link
                to="/cadete/profileCadete"
                style={{ color: "inherit", textDecoration: "none" }}
                onClick={handleMobileMenuClose}
              >
                <Button color="inherit">Perfil</Button>
              </Link>
            </MenuItem>
          ) : null}
        </>
      )}
      {user && user.admin ? (
        <>
          <MenuItem>
            <Link
              to="/admin"
              style={{ color: "inherit", textDecoration: 'none' }}
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

  console.log(user);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes[`${userTypeColor()}`]}>
        <Toolbar >
          {location[1] !== "" ? (
            <IconButton>
              <ArrowBackIosIcon
                style={{ color: "grey" }}
                onClick={() => history.goBack()}
              />
            </IconButton>
          ) : null}
          <Typography variant="h7" className={classes.titleWelcome}>
            {user && user.authorized
              ? `Hola ${user.firstName}`
              : null}
            {cadeteria ? cadeteria.nameCompany : null}
          </Typography>
          <div className={classes.sectionDesktop}>
            {!token ? (
              <>
                <Link
                  to="/login-as"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button color="inherit">Login</Button>
                </Link>
                <Link
                  to="/register-as"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button color="inherit">Register</Button>
                </Link>
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button color="inherit">Home</Button>
                </Link>
              </>
            ) : (
              <>
                <div>
                  <IconButton
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    {user || cadeteria ? (
                      <Avatar
                        alt={
                          (user && user.firstName) ||
                          (cadeteria && cadeteria.nameCompany)
                        }
                        src={process.env.PUBLIC_URL + "avatars/person-3.svg"}
                        style={{ display: "flex", margin: 3 }}
                      />
                    ) : (
                      <MoreIcon />
                    )}
                  </IconButton>
                </div>
              </>
            )}

            {user && user.admin ? (
              <></>
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
              {user || cadeteria ? (
                <Avatar
                  alt={user && user.firstName}
                  src={process.env.PUBLIC_URL + "avatars/person-2.svg"}
                  style={{ display: "flex", margin: 3 }}
                />
              ) : (
                <MoreIcon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};
export default Navbar;
