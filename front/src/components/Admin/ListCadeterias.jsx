import React, { useEffect } from "react";
import { IconButton, Grid, Typography, CssBaseline } from "@material-ui/core";

import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allCadeterias, editStateCadeteria } from "../../state/cadeterias";
import Request from "../../utils/Request";
import { useSnackbar } from "notistack";
import messagesHandler from "../../utils/messagesHandler";

import socket from "../../utils/socket";

export default function ListCadeterias() {
  const cadeterias = useSelector((state) => state.cadeterias.cadeterias);
  const messages = messagesHandler(useSnackbar());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allCadeterias());
  }, []);

  const handleActive = (id) => {
    dispatch(editStateCadeteria(id)).then((res) => {
      res.payload
        ? alert("Estado cambiado correctamente")
        : alert("Hubo un problema");
    });
    socket.emit("cadeterias");
    
  };

  return (
    <>
      <Grid
        container
        xs={12}
        xl={12}
        direction="column"
        justify="center"
        alignItems="stretch"
        style={{ margin: 3, padding: 10 }}
      >
        <div>
          <CssBaseline />
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
        >LISTA DE CADETERIAS       
         </Typography>
        </div>
        <Grid Item>
          {cadeterias &&
            cadeterias.map((cadeteria) => {
              return cadeteria.authorized ? (
                <Request cadeteria={cadeteria} handleActive={handleActive} />
              ) : null;
            })}
        </Grid>
      </Grid>
    </>
  );
}
