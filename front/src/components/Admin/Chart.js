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


    return(
      <React.Fragment>
      <>
        <div className='header'>
          <h1 className='title'>Rendimiento cadeterias</h1>
        </div>
        <Bar data={data} options={options} />
      </>
      <React.Fragment></React.Fragment></React.Fragment>
      )
}
 
  


export default MultiAxisLine;






// import React from "react";
// import { useTheme } from "@material-ui/core/styles";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Label,
//   ResponsiveContainer,
// } from "recharts";
// import Title from "./Title";

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }



// const data = [
//   createData("00:00", 0),
//   createData("03:00", 300),
//   createData("06:00", 600),
//   createData("09:00", 800),
//   createData("12:00", 1500),
//   createData("15:00", 2000),
//   createData("18:00", 2400),
//   createData("21:00", 2400),
//   createData("24:00", undefined),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
//           <YAxis stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270}
//               position="left"
//               style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line
//             type="monotone"
//             dataKey="amount"
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }
