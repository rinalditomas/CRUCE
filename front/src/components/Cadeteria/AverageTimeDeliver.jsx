import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function OrdenesEntregadas({orders, id}) {

    

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
    
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {orders && orders.map((order)=>{
       if(order.userId == id){
        return order.status == "Entregado" ?  
        (<h5>{order.inTransit}</h5>) : null
        }
        })}
      </Typography>
 
    </React.Fragment>
  );
}
    