const { Order } = require("../models");

const NewOrderController = {
  newOrder(req, res) {
  
   const orders = req.body.items
   
   orders.map((order)=>{
 
      Order.create({
        clientName : order['Client Name'],
        clientLastName: order['Client Last Name'],
        orderNumber: order.Order,
        creationDate: order['Creation Date'],
        province: order['UF'],
        city: order.City,
        street:order.Street,
        number: order.Number,
        complement:order.Complement,
        productName: order['SKU Name'], 
        productSku:order['ID_SKU']
      })
    })
      console.log ("----------------------> Archivo Cargado con Exito")
  },
};

module.exports = NewOrderController;