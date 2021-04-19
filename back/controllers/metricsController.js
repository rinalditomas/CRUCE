
const { Order, Product, User, Cadeteria } = require("../models");

const metricsController = {
  async cadeteDispatchedTotal(req, res) {
    const userId = req.params.id;
    try {
      const dispatched = await Order.findAndCountAll({
        where: { status: "Entregado", userId },
      });
      dispatched ? res.status(200).send(dispatched) : res.sendStatus(401);
    } catch (e) {
      res.status(500).send(e);
    }
  },

  async cadeteReturnedTotal(req, res) {
      const userId = req.params.id
    try {
      const returned = await Order.findAndCountAll({
        where: { status: "Devuelto a sucursal", userId },
      });
      returned ? res.status(200).send(returned) : res.sendStatus(401);
    } catch (e) {
      res.status(500).send(e);
    }
  },
  async averageTimeCadeteria(req,res){
    console.log(req.params)
    const id = req.params.id
    let orders;

    try {
      const metricas={
        deliver:0,
        returned:0,
        averageTimeDeli :0,
        averageTimePick: 0,
      }
      if(req.params.modelo === "cadeteria"){
         orders= await Order.findAll({where:{
          cadeteriumId: id }})
      }
      if(req.params.modelo === "cadete"){
          orders= await Order.findAll({where:{
          userId: id }})
      }
    
     let contador = 0
      orders.map((order)=>{
        if(order.status == "Entregado"){
          contador ++
          metricas.deliver += 1;
          metricas.averageTimeDeli += order.deliveryDate - order.pickUpDate
          metricas.averageTimePick += order.pickUpDate - order.createdAt 
        }
        if(order.status == "Devuelto a sucursal"){
          metricas.returned += 1;
        }
      })
      metricas.averageTimeDeli = metricas.averageTimeDeli / contador
      metricas.averageTimePick = metricas.averageTimePick / contador
    
      res.status(200).send({metricas})
     
    } catch (error) {
      console.log(error)
    }
  },
//   avergateTimeAllCadeterias(req,res){
   
//     const  Allmetrics = []
//     let metricas={
//       id:0,
//       deliver:0,
//       returned:0,
//       averageTimeDeli :0,
//       averageTimePick: 0,}

//       Cadeteria.findAll().then((cadeterias)=>{
//         cadeterias.map((cadeteria)=>{
         
//           Order.findAll({
//             where:{
//               cadeteriumId:cadeteria.id
//             }
//           }).then((orders)=>{
        
//             metricas.id = cadeteria.id
//             let contador = 0
//             orders.map((order)=>{
//                     if(order.status == "Entregado"){
//                       contador ++
//                       metricas.deliver += 1;
//                       metricas.averageTimeDeli += order.deliveryDate - order.pickUpDate
//                       metricas.averageTimePick += order.pickUpDate - order.createdAt 
//                     }
//                     if(order.status == "Devuelto a sucursal"){
//                       metricas.returned += 1;
//                     }
//           })
//           metricas.averageTimeDeli = metricas.averageTimeDeli / contador
//           metricas.averageTimePick = metricas.averageTimePick / contador
         
//           if((metricas.deliver > 0) == true){
//             Allmetrics.push(metricas)
//           }
          
//           console.log("ADENTRO DE ORDERS",Allmetrics)
          
        
//             metricas.id=0;
//             metricas.deliver=0;
//             metricas.returned=0;
//             metricas.averageTimeDeli =0;
//             metricas.averageTimePick= 0;
       
          
//         })
//         console.log("AFUERA DE ORDERS",Allmetrics)
//       })
      
//   })
 
// }


  async avergateTimeAllCadeterias(req,res){
   
    let orders;
    let Allmetrics = []
    let metricas ={
      id:0,
      deliver:0,
      returned:0,
      averageTimeDeli :0,
      averageTimePick: 0,}
      
    let objet = "hola"
  


    try {

          const cadeterias = await Cadeteria.findAll()
          const ordenes= await Order.findAll()
  
    cadeterias.map((cadeteria)=>{
      
      metricas.id = cadeteria.id
      let contador = 0
      ordenes.map((orden)=>{
        if(cadeteria.id == orden.cadeteriumId){
          if(orden.status == "Entregado"){
            
                contador ++
                metricas.deliver += 1;
                metricas.averageTimeDeli += orden.deliveryDate - orden.pickUpDate
                metricas.averageTimePick += orden.pickUpDate - orden.createdAt 
              }
              if(orden.status == "Devuelto a sucursal"){
                metricas.returned += 1;
              }
        }
      })
      
      metricas.averageTimeDeli = metricas.averageTimeDeli / contador
      metricas.averageTimePick = metricas.averageTimePick / contador

      Allmetrics.push(metricas)
       
      // metricas.id=0;
      // metricas.deliver=0;
      // metricas.returned=0;
      // metricas.averageTimeDeli =0;
      // metricas.averageTimePick= 0;

    })
  
    console.log(Allmetrics)
   

    }catch(error){
      
          console.log(error)
    }
  }
  
};

module.exports = metricsController;
