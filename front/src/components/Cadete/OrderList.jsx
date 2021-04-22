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
import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { orderState } from "../../state/orders";

import { useSnackbar } from "notistack";
import messagesHandler from "../../utils/messagesHandler";

import socket from "../../utils/socket";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(5),
  },
}));

export default function CustomList({ order }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const messages = messagesHandler(useSnackbar());
  const dispatch = useDispatch();
  const cadete = useSelector((state) => state.users.user);

  const handleClick = () => {
    setOpen(!open);
  };

  const typeColor = () => {
    if (order.status === "Pendiente") return "#039be5";
    if (order.status === "En camino") return "lime";
  };

  const update = (orderNumber, status, cadeteId, orderId) => {
    let state;
    if (status === "En camino") {
      history.push(`/cadete/singleOrder/${orderId}/${orderNumber}`);
    }
    if (status === "Pendiente") {
      state = "En camino";

      setTimeout(() => {
        dispatch(
          orderState({
            orderNumber,
            state,
            cadeteId,
          })
        ).then(({ payload }) => {
          if (typeof payload === 'object') socket.emit("orden", { orden: payload });
          if (payload.status === "En camino")
            return messages.info("Has tomado una orden");
          else if (typeof payload === "string") {
            return messages.info(payload);
          }
        });
      }, 2000);
    }
  };

  return (
    <List
      id={order.id}
      style={{
        background: `linear-gradient(50deg, #fafafa , 96%, ${typeColor()} 100%)`,
        borderRadius: '4px'
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
            <ListItem>
              <ListItemIcon>
                <PhoneInTalkOutlinedIcon />
              </ListItemIcon>
              <a href={`tel:+${order.clientPhone}`}>{order.clientPhone}</a>
              {/*  <ListItemText secondary={`${order.clientPhone}`} /> */}
            </ListItem>
          </ListItem>
        </List>
      </Collapse>
      <ListItem
        button
        onClick={() => {
          update(order.orderNumber, order.status, cadete.id, order.id);
        }}
      >
        <ListItemIcon>
          <RadioButtonCheckedTwoToneIcon style={{ color: `${typeColor()}` }} />
        </ListItemIcon>
        <ListItemText primary={`${order.status}`} />
      </ListItem>
      <ListItem button style={{ textAlign: "end" }}>
        <ListItemIcon></ListItemIcon>
        <ListItemText
          secondary="Detalle"
          onClick={() =>
            history.push(`/cadete/singleOrder/${order.id}/${order.orderNumber}`)
          }
        />
      </ListItem>
    </List>
  );
}
