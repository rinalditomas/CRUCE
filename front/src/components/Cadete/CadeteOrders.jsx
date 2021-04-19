import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { Paper, Grid, Container, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { allOrders, orderState } from "../../state/orders";
import { useSnackbar } from "notistack";
import messagesHandler from "../../utils/messagesHandler";

import socket from "../../utils/socket";
// import { orderState} from "../state/order";

import OrderList from "../Styled/OrderList";

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

  socket.on("orden", (mensaje) => {
    dispatch(allOrders(cadete.cadeteriumId)).then(() => {
      messages.info(`${mensaje.nombre} ha tomado un orden`);
    });
  });
  socket.on("ordenes", (ordenes) => {
    return dispatch(allOrders(cadete.cadeteriumId));
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
        <Typography variant="h3" key="1" style={{ margin: 20, padding: 20 }}>
          Lista de ordenes
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

/* 
<ListItem key={order.id}>
                      <Link
                        to={`/cadete/singleOrder/${order.id}/${order.orderNumber}`}
                      >
                        <ListItemText
                          primary={
                            order.street +
                            " " +
                            order.number +
                            " " +
                            (order.complement ? order.complement : "")
                          }
                        />
                      </Link>
                      <ListItemSecondaryAction>
                        <IconButton>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              update(
                                order.orderNumber,
                                order.status,
                                cadete.id,
                                order.id
                              );
                            }}
                          >
                            {order.status}
                          </Button>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem> */
