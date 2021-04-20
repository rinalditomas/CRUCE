import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'
import { useSelector } from "react-redux";





const MultiAxisLine = () => {
    const cadeterias = useSelector((state) => state.cadeterias.cadeterias);

    const data = {
    
        
        labels: ['Uber', 'Deliveroo', 'Glovo', '4', '5', '6'],
        datasets: [
          {
            label: 'Nº ordenes entregadas',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: '#FB9292',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'Nº ordenes devueltas a sucursal',
            data: [1, 2, 1, 1, 2, 2],
            fill: false,
            backgroundColor: '#870707',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: 'Promedio tiempo de entrega',
            data: [4, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: '#3FBF50',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-2',
          },
          {
            label: 'Promedio de espera',
            data: [1, 4, 1, 1, 2, 2],
            fill: false,
            backgroundColor: '#1C5D29',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y-axis-2',
          },
        ],
      }
      
      const options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      }


    return(<>
        <Bar data={data} options={options} />
      </>)
}
 
  


export default MultiAxisLine;
