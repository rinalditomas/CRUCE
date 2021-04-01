const { Order } = require("../models");

const NewOrderController = {
  newOrder(req, res, next) {
    const orders = req.body.items;
    console.log(req.body.items);

    const promise = new Promise((resolve, reject) => {
      orders.map((order) => {
        Order.create({
          clientName: order["Client Name"],
          clientLastName: order["Client Last Name"],
          orderNumber: order.Order,
          creationDate: order["Creation Date"],
          province: order["UF"],
          city: order.City,
          street: order.Street,
          number: order.Number,
          complement: order.Complement,
          productName: order["SKU Name"],
          productSku: order["ID_SKU"],
        });
      });
      resolve(res.sendStatus(200));
      reject(res.sendStatus(500));
    });
  },

  async allOrders(req, res) {
    try {
      const orders = await Order.findAll();
      res.send(orders);
    } catch (e) {
      res.send(e);
    }
  },

  async findOrderById(req, res) {
    const id = req.params.id;
    try {
      const order = await Order.findByPk(id);
      res.send(order);
    } catch (e) {
      res.send(e);
    }
  },
};

module.exports = NewOrderController;
