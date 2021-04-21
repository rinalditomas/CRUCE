import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { allOrders } from "../../state/orders";
import { useSnackbar } from "notistack";
import messagesHandler from "../../utils/messagesHandler";

import socket from "../../utils/socket";
// import { orderState} from "../state/order";
import OrderList from "./OrderList";
import { fetchMe } from "../../state/users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    borderRadius: 10,
    fontSize: 15,
    margin: 10,
  },
  container: {
    overflowX: "0 auto",
    marginRight: "0 auto",
    marginLeft: "0 auto",
    marginTop: "50px",
    padding: "10px",
    margin: "10px",
    display: "flex",
  },
}));

const CadeteOrders = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const cadete = useSelector((state) => state.users.user);
  const orders = useSelector((state) => state.orders.orders);
  const [estado, setEstado] = React.useState(false);
  const messages = messagesHandler(useSnackbar());

  useEffect(() => {
    if (cadete.id) {
      dispatch(allOrders(cadete.cadeteriumId)).then((res) => {
        if (res.payload.state === false) {
          setEstado(true);
        }
      });
      socket.emit("conectado", cadete.firstName + " " + cadete.lastName);
    }
  }, [cadete]);

  socket.on("cadetes", () => {
    dispatch(fetchMe());
  });

  socket.on("orden", (orden) => {
    dispatch(allOrders(cadete.cadeteriumId)).then(() => {
      if (typeof orden === "object" && orden.status === "En camino") {
        cadete.firstName + " " + cadete.lastName !== orden.nombre
          ? messages.info(`${orden.nombre} ha tomado un orden`)
          : messages.info(`Has tomado un orden`);
      }
    });
  });

  socket.on("ordenes", (ordenes) => {
    dispatch(allOrders(cadete.cadeteriumId));
  });

  if (!cadete.authorized) {
    return (
      <div className={classes.root}>
        <h1>Tu cadeteria aun no te ha autorizado</h1>
        <img
          style={{ maxWidth: "100%" }}
          src="https://images.assetsdelivery.com/compings_v2/lkeskinen/lkeskinen1610/lkeskinen161000200.jpg"
          alt="403"
        />
      </div>
    );
  }
  if (!cadete.active) {
    return (
      <div className={classes.root}>
        <h1>No estas activo</h1>
        <img
          style={{ maxWidth: "100%" }}
          src="https://images.assetsdelivery.com/compings_v2/lkeskinen/lkeskinen1610/lkeskinen161000200.jpg"
          alt="403"
        />
      </div>
    );
  }
  if (estado === true) {
    return (
      <div className={classes.root}>
        <h1>Tu cadeteria no esta activa</h1>
        <img
          style={{ maxWidth: "100%" }}
          src="https://images.assetsdelivery.com/compings_v2/lkeskinen/lkeskinen1610/lkeskinen161000200.jpg"
          alt="403"
        />
      </div>
    );
  } else {
    return (
      <div>
        <Typography
          variant="h4"
          key="1"
          style={{ margin: 20, padding: 20, textAlign: "center" }}
        >
          LISTA DE ORDENES
        </Typography>
        <Container
          style={{
            backgroundColor: "#eeeeee",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Container
            style={{
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Grid container spacing={3} direction="column">
              {orders &&
                orders.map((order, i) => {
                  return order.status !== "Entregado" &&
                    order.status !== "Devuelto a sucursal" &&
                    (order.userId === cadete.id || order.userId === null) ? (
                    <Grid key={i} item xs={11}>
                      <Paper
                        className={classes.paper}
                        style={{
                          textAlign: "initial",
                          background:
                            "linear-gradient(45deg, #eeeeee, 30%, #9e9e9e 90%)",
                        }}
                      >
                        <OrderList order={order} />
                      </Paper>
                    </Grid>
                  ) : null;
                })}
            </Grid>
          </Container>
        </Container>
      </div>
    );
  }
};

export default CadeteOrders;
