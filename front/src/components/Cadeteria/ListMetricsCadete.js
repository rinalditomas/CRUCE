import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Admin/Title';
import { useSelector } from 'react-redux';

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

  function createData(name, deliver, returned, averageTimeDeli, averageTimePick, id,lastName) {
    return { name, deliver, returned, averageTimeDeli, averageTimePick, id, lastName}
  }
  
  const dataRow = (obj)=>{
  let resultado  =[]
    for (const id in obj) {
    resultado.push(createData(obj[id].name,obj[id].deliver,obj[id].returned,(obj[id].averageTimeDeli/36000000).toFixed(3),(obj[id].averageTimePick/36000000).toFixed(3),id,obj[id].lastName))
    }
    return resultado
  }
  
  const rows = dataRow(metricas)
  
  console.log(rows)






 
  console.log("ACA ESTAN LAS METRICAS EN",metricas)
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Detalle Cadetes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Cadete</TableCell>
            <TableCell>Nº Ordenes Entregadas</TableCell>
            <TableCell>Nº Ordenes Devueltas a Sucursal</TableCell>
            <TableCell>Promedio de Entrega (horas)</TableCell>
            <TableCell >Promedio de Espera(horas)</TableCell>
            <TableCell >Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => 
          {console.log(row)
            return(
            <TableRow key={row.id}>
              <TableCell align='left'>{row.name} {row.lastName}</TableCell>
              <TableCell align='center'>{row.deliver}</TableCell>
              <TableCell align='center'>{row.returned}</TableCell>
              <TableCell align='center'>{row.averageTimeDeli}</TableCell>
              <TableCell align='center' >{row.averageTimePick}</TableCell>
             <Link to={`/admin/metricas/${row.id}/cadeteria`}>

               <TableCell align='center'>Click</TableCell>

            </Link>
            </TableRow>
           
          )})}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
