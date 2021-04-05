import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { ordersList, orderState } from "../state/orders";
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
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(ordersList());
  }, []);

  const update = (id, status) => {
    let state = "";
    if (status == "En camino") {
      state = "Entregado";
    }
    if (status == "Pendiente") {
      state = "En camino";
    }
    dispatch(orderState({ id: id, state: state }));
  };

  return (
    <div className={classes.root}>
      <div>
        <h1 className="titulo">Lista de Ordenes</h1>
      </div>
      <div className={classes.demo}>
        <List dense={dense}>
          {orders &&
            orders.map((order) => {
              return order.status === "Entregado" ||
                order.status === "Devuelto a sucursal" ? null : (
                <ListItem key={order.id}>
                  <Link to={`/singleOrder/${order.id}`}>
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
                        onClick={() => update(order.id, order.status)}
                      >
                        {order.status}
                      </Button>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
        </List>
      </div>
    </div>
  );
};

export default CadeteOrders;
