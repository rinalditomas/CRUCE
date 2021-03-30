const { Order } = require("../models");

const NewOrderController = {
  newOrder(req, res) {
    console.log(req.body)
   const orders = req.body.items
   orders.map((order)=>{
    console.log(order)
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
      .then((orden)=>{
        console.log(orden)

      })
   })




    // orders.map((order)=>{
    //   Order.create
    // })
  },
};
// Order.bulkCreate(req.body)
//   .then((orders) => {
//     res.status(201).send(user);
//   })
//   .catch((err) => res.send(err));

module.exports = NewOrderController;