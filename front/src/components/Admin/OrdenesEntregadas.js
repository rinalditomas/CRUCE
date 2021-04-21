import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function OrdenesEntregadas({orders}) {

    console.log(orders)

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
    
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {orders.map((order)=>{
            console.log(order)
          return ( 
          <Link to={`/admin/metrics/SingleOrder/${order.id}/${order.orderNumber}`}>
            <h5>{order.orderNumber} - {((order.deliveryDate).toString()).slice(0,[10])}</h5>
          </Link> )
        })}
      </Typography>
 
    </React.Fragment>
  );
}
    