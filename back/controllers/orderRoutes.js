const { Order } = require("../models");

const NewOrderController = {
  newOrder(req, res, next) {
  
   const orders = req.body
   
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
    .then(res.sendStatus(200))
    
  },
};

module.exports = NewOrderController;