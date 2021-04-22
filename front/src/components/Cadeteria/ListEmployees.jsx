import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { allCadetes, editStateCadete } from "../../state/users";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import messagesHandler from "../../utils/messagesHandler";
import socket from "../../utils/socket";
import { CssBaseline, Typography } from "@material-ui/core";
import Requests from "../../utils/Request";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  individualOrder: {
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 8,
  },
}));

export default function ListEmployees() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const cadetes = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const messages = messagesHandler(useSnackbar());
  /*  console.log("aca estan los cadetes", cadetes); */

  useEffect(() => {
    dispatch(allCadetes());
  }, []);

  const handleActive = (id) => {
    dispatch(editStateCadete(id)).then((res) => {
      res.payload
        ? messages.success("Estado cambiado correctamente")
        : messages.error("Hubo un problema");
    });

    socket.emit("cadetes", id);
  };

  socket.on("cadetes", (cadetes) => {
    dispatch(allCadetes());
  });

  return (
    <>
      <div>
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
                if (cadete.authorized) {
                  return (
                   <Requests cadete={cadete} handleActive={handleActive} />
                  );
                }
              })}
          </List>
        </div>
      </div>
    </>
  );
}
