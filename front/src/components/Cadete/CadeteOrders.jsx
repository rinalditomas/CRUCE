import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { allOrders, orderState } from "../../state/orders";
// import { orderState} from "../state/order";

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

const CadeteOrders = () => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const dispatch = useDispatch();
  const cadete = useSelector((state) => state.users.user);
  const orders = useSelector((state) => state.orders.orders);
  const [estado, setEstado] = React.useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch(allOrders(cadete.cadeteriumId)).then((res) => {
      if (res.payload.state == false) {
        setEstado(true);
      }
    });
  }, []);

  const ordersToShow = [];

  // const filter = (orders) => {
  //   orders.map((order) => {
  //     order.userId == cadete.id || order.userId == null
  //       ? ordersToShow.push(order)
  //       : null;
  //   });
  // };

  const update = (orderNumber, status, cadeteId, orderId) => {
    let state;
    if (status == "En camino") {
      history.push(`/cadete/singleOrder/${orderId}/${orderNumber}`);
    }
    if (status === "Pendiente") {
      state = "En camino";
      dispatch(
        orderState({
          orderNumber: orderNumber,
          state: state,
          cadeteId: cadeteId,
        })
      );
    }
  };
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
      <>
        <div className={classes.root}>
          <div>
            <h1 className="titulo">Lista de Ordenes</h1>
          </div>
          <div className={classes.demo}>
            <List dense={dense}>
              {orders &&
                orders.map((order) => {
                  return order.status != "Entregado" &&
                    order.status != "Devuelto a sucursal" &&
                    (order.userId === cadete.id || order.userId == null) ? (
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
                    </ListItem>
                  ) : null;
                })}
            </List>
          </div>
        </div>
      </>
    );
  }
};

export default CadeteOrders;
