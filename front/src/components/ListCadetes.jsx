import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Link } from "react-router-dom"
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import axios from 'axios';


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

export default function ListCadetes() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
const [cadetes, setCadetes] = useState([])

useEffect(() => {
    axios.get("http://localhost:8000/api/admin/allCadetes")
    .then((res)=> setCadetes(res.data))
}, [cadetes])

    
   const handleActive = (id)=>{
    console.log("ACA ESTA EL ID", id)
    axios.put(`http://localhost:8000/api/admin/editCadete/${id}`)
    .then((res)=>{
        res.status === 200 ? alert("El estado se cambio correctamente"): alert("Hubo un error")
    })
   }

  return (
    <div className={classes.root}>
        <div>
        <h1 className= 'titulo'>Lista de cadetes</h1>
        <Link to="/register" style={{ textDecoration: 'none', color: "inherit" }}>
        <IconButton edge="end" aria-label="delete" className = 'icono'>
                      <PersonAddIcon fontSize= 'large'/>
        </IconButton>
        </Link>
        </div>
          <div className={classes.demo}>
            <List dense={dense}>
                    {cadetes.map((cadete)=>{

                    return (   <ListItem>
                    <ListItemText
                    primary={cadete.firstName + " "+ cadete.lastName}
                    />
                    <ListItemSecondaryAction>
                        {cadete.active?( <IconButton edge="end" aria-label="delete" onClick={()=>{handleActive(cadete.id)}}>
                        <BlockIcon />
                    </IconButton>):(   <IconButton edge="end" aria-label="delete" onClick={()=>{handleActive(cadete.id)}}>
                        <CheckIcon />
                    </IconButton>)}
                    </ListItemSecondaryAction>
                    </ListItem>
                    )})}
               
              
            </List>
          </div>
    </div>
  );
}




