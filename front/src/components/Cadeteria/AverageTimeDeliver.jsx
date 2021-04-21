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

  let conversor = (time) => {
    let hr = (time / 3600000) | 0;
    if (hr / 10 < 1) hr = "0" + hr;

    let min
    if (time%3600000==0) min = "00"
    else(min=(time%3600000/6000).toFixed(0))
   
   
    return hr+"hr : "+min+"min"
  }
  

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
    
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {orders && orders.map((order)=>{
       if(order.userId == id){
        return order.status == "Entregado" ?  
        (<h5>{order.orderNumber} _____ {conversor(18700000)}</h5>) : null
        }
        })}
      </Typography>
 
    </React.Fragment>
  );
}
    