import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function OrdenesEntregadas({ orders, id }) {
  let conversor = (tiempo) => {
    let enMinutos = tiempo / 1000 / 60;
    let hs = enMinutos / 60;
    let minutos = enMinutos % 60;

    return Math.floor(hs) + " Hs : " + Math.round(minutos) + " Min";
  };

  return (
    <>
      {orders &&
        orders.map((order) => {
          if (order.userId == id) {
            return order.status == "Entregado" ? (
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <Typography variant="subtitle1">
                    {order.orderNumber}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    {conversor(order.pickUpaverage)}
                  </Typography>
                </Grid>
              </Grid>
            ) : null;
          }
        })}
    </>
  );
}
