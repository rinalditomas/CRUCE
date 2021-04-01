const { Order, Product } = require("../models");

const NewOrderController = {
  async newOrder(req, res, next) {
    const orders = req.body.items;
    const ordenes = await orders.map((order) => {
      Order.create({
        clientName: order["Client Name"],
        clientLastName: order["Client Last Name"],
        productName: order["SKU Name"],
        productSku: order["ID_SKU"],
        orderNumber: order.Order,
        creationDate: order["Creation Date"],
        province: order["UF"],
        city: order.City,
        street: order.Street,
        number: order.Number,

        complement: order.Complement,
      });

      Product.create({
        productName: order["SKU Name"],
        productSku: order["ID_SKU"],
        orderNumber: order.Order,
      });
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

  async changeStateOrders(req, res) {
    const id = req.params.id;
    const status = req.body.status;

    Order.findByPk(id).then((order) => {
      order.update({
        status: status,
      });
    });
  },
};

module.exports = NewOrderController;
