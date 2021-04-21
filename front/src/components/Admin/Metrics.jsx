import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Orders from './Orders';
import Tabla from "./dashboard"
import { useDispatch, useSelector } from 'react-redux';
import { AllcadeteriasMetrics, metricOrders } from '../../state/orders';
import { allCadeterias } from '../../state/cadeterias';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    margin: "auto",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 340,
  },
}));

export default function Dashboard() {
  const dispatch = useDispatch() 
  const classes = useStyles();
  const metrics = useSelector((state) => state.orders.metrics);
  const cadeterias = useSelector((state) => state.cadeterias.cadeterias);

  useEffect(() => {
    dispatch(AllcadeteriasMetrics());
    dispatch(allCadeterias());
  }, []);
  
  console.log("aca estoy en metricas, no en el dashboard", metrics)


  return (
    <div>
       <h1>Rendimiento de Cadeterias</h1>


    <Container maxWidth="lg" className={classes.container}>

          <div className = "tabla">
            <Tabla metricas = {metrics} />
          </div>
   
    </Container>
    <div className={classes.root}>
      <CssBaseline />
    
     
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        
       
        <Container maxWidth="lg" className={classes.container}>
       
   
            <Grid item xs={12} >
              <Paper className={classes.paper}>
                <Orders metricas = {metrics}/>
            </Paper>
     
          </Grid>
         
        </Container>
      </main>
    </div>
    </div>
  );
}