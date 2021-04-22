import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import BlockIcon from "@material-ui/icons/Block";
import { Link } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { allCadetes, editStateCadete } from "../../state/users";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";


import socket from '../../utils/socket'
import { CssBaseline, Typography } from "@material-ui/core";
import Requests from "../../utils/Request";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function ListCadetes() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const cadetes = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCadetes());
  }, []);

  const handleActive = (id) => {
    dispatch(editStateCadete(id)).then((res) => {
      res.payload
        ? alert("Estado cambiado correctamente")
        : alert("Hubo un problema");
    })
    socket.emit('cadetes')
  };

  socket.on("cadetes", (cadetes) => {
    dispatch(allCadetes());
  });


  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <div>
        <Typography
          variant="h4"
          key="1"
          style={{
            textAlign: "center",
            marginTop: 45,
            marginBottom: 50,
            color: "black",
            fontWeight: "bold",
          }}
        >LISTA DE CADETES       
         </Typography>
         
        </div>
        <div className={classes.demo}>
          <List dense={dense}>
            {cadetes &&
              cadetes.map((cadete) => {
                return (
                 <Requests cadete={cadete} handleActive={handleActive} />
                );
              })}
          </List>
        </div>
      </div>
    </>
  );
}
{/* <ListItem>
<ListItemText
  primary={cadete.firstName + " " + cadete.lastName}
/>
<ListItemSecondaryAction>
  {cadete.active ? (
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={() => {
        handleActive(cadete.id);
      }}
    >
      <Chip
        icon={<DoneIcon />}
        label="Activo"
        style={{ color: "green" }}
        variant="outlined"
      />
    </IconButton>
  ) : (
    <IconButton
      edge="end"
      aria-label="delete"
      onClick={() => {
        handleActive(cadete.id);
      }}
    >
      <Chip
        icon={<BlockIcon />}
        label="Inactivo"
        color="secondary"
        variant="outlined"
      />
    </IconButton>
  )}
</ListItemSecondaryAction>
</ListItem> */}