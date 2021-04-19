import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import RadioButtonCheckedTwoToneIcon from "@material-ui/icons/RadioButtonCheckedTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CustomList({ order }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      id={order.id}
      style={{
        background: "linear-gradient(50deg, #eeeeee , 95%, #039be5 100%)",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ position: "relative" }}
        >
          ID: {order.orderNumber}
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <LocationOnOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={`${order.street} ${order.number} `} />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <PermIdentityOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={`${order.clientName} ${order.clientLastName}`} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItem
              button
              onClick={() => alert(`Llamando a ${order.clientName}`)}
            >
              <ListItemIcon>
                <PhoneInTalkOutlinedIcon />
              </ListItemIcon>
              <ListItemText secondary={`${order.clientPhone}`} />
            </ListItem>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => alert("Cambiar el estado")}>
        <ListItemIcon>
          <RadioButtonCheckedTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary={`${order.status}`} />
      </ListItem>
      <ListItem button style={{ textAlign: "end" }}>
        <ListItemIcon></ListItemIcon>
        <ListItemText
          secondary="Detalle"
          onClick={() => alert("Redirigir al detalle")}
        />
      </ListItem>
    </List>
  );
}
