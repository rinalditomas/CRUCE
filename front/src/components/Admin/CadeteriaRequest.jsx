import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { useDispatch, useSelector } from "react-redux";
import { admitCadeteria, allCadeterias } from "../../state/cadeterias";
import { useSnackbar } from "notistack";
import messagesHandler from "../../utils/messagesHandler";

import socket from "../../utils/socket";
import { Container, CssBaseline, Paper, Typography } from "@material-ui/core";

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
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
}));

export default function CadeteriaRequest() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);

  const cadeterias = useSelector((state) => state.cadeterias.cadeterias);

  const messages = messagesHandler(useSnackbar());

  useEffect(() => {
    dispatch(allCadeterias());
  }, []);

  const handleActive = (id) => {
    dispatch(admitCadeteria(id)).then((res) => {
      res.payload
        ? messages.success("Estado cambiado correctamente")
        : messages.error("Hubo un problema");
    });
    socket.emit("cadeterias");
  };

  socket.on("cadeterias", () => {
    dispatch(allCadeterias());
  });

  return (

      <div style={{alignContent:'center',}} className={classes.root}>
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
        >SOLICITUDES DE CADETERIAS       
         </Typography>
         
        </div>
        <div className={classes.demo}>
          <List dense={dense}>
            {cadeterias &&
              cadeterias.map((cadeteria) => {
                return cadeteria.authorized === false ? (
                  <Container maxWidth="lg" className={classes.container}>
                  <Paper elevation={1}>
                  <ListItem key={cadeteria.id}>
                    <ListItemText primary={cadeteria.nameCompany} />
                    <ListItemSecondaryAction>
                      {cadeteria.active ? (
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => {
                            handleActive(cadeteria.id);
                          }}
                        >
                          <Chip
                            icon={<DoneIcon />}
                            label="Autorizar"
                            style={{ color: "grey" }}
                            variant="outlined"
                          />
                        </IconButton>
                      ) : (
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => {
                            const r = window.confirm(
                              "¿Autorizar la cadeteria?"
                            );
                            if (r === true) return handleActive(cadeteria.id);
                            else return null;
                          }}
                        >
                          <Chip
                            icon={<DoneIcon />}
                            label="Autorizar"
                            style={{ color: "grey" }}
                            variant="outlined"
                          />
                        </IconButton>
                      )}
                    </ListItemSecondaryAction>
                  </ListItem>
                  </Paper>
                  </Container>
                ) : null;
              })}
          </List>
        </div>
      </div>

  );
}
