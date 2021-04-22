import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders({metricas}) {

  function createData(name, deliver, returned, averageTimeDeli, averageTimePick, id) {
    return { name, deliver, returned, averageTimeDeli, averageTimePick, id};
  }
  


  let conversor = (tiempo) => {
    let enMinutos = tiempo / 1000 / 60;
    let hs = enMinutos / 60;
    let minutos = enMinutos % 60;

    return Math.floor(hs)+" Hs : "+Math.round(minutos)+" Min"
  };

  console.log(conversor(18000000))


  const dataRow = (obj)=>{
  let resultado  =[]
    for (const id in obj) {
    resultado.push(createData(obj[id].name,obj[id].deliver,obj[id].returned,(conversor(obj[id].averageTimeDeli)),conversor(obj[id].averageTimePick),id))
    }
    return resultado
  }
  
  const rows = dataRow(metricas)
  
  console.log(rows)


  console.log("ACA ESTAN LAS METRICAS EN",metricas)
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Detalle Cadeterias</Title>
      <Table size="medium" >
        <TableHead>
          <TableRow>
            <TableCell>Cadeteria</TableCell>
            <TableCell>Nº Entregadas</TableCell>
            <TableCell>Nº Devueltas Sucursal</TableCell>
            <TableCell>Tiempo Entrega (H)</TableCell>
            <TableCell >Tiempo Espera (H)</TableCell>
            <TableCell >Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => 
          {console.log(row)
            return(
            <TableRow key={row.id}  >
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='center'>{row.deliver}</TableCell>
              <TableCell align='center'>{row.returned}</TableCell>
              <TableCell align='center'>{row.averageTimeDeli}</TableCell>
              <TableCell align='right' >{row.averageTimePick}</TableCell>
             <Link to={`/admin/metrics/${row.id}/cadeteria/${row.name}`}>
               <TableCell align='center'>Click</TableCell>
            </Link>
            </TableRow>           
          )})}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
