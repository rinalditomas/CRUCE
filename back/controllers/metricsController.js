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
      res.status(200).send({metricas,orders})
     
    } catch (error) {
      console.log(error)
    }
  }
};

module.exports = metricsController;
