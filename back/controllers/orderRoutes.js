const { Order, Product } = require("../models");

const NewOrderController = {
  async newOrder(req, res, next) {
    const orders = req.body.items;
    await orders

      .map((order) => {
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
      })
      .then(res.sendStatus(200))
      .catch(res.sendStatus(401));
  },

  /*  async allOrders(req, res) {
    try {
      const orders = await Order.findAll();
      res.send(orders);
    } catch (e) {
      res.send(e);
    }
  }, */

  async allOrders(req, res) {
    let list = {};
    let ord = [];
    try {
      const orders = await Order.findAll();
      orders.map((order) => {
        list[order.orderNumber] = true;
      });

      for (id in list) {
        const ordy = await Order.findOne({
          where: { orderNumber: id },
        });
        ord.push(ordy);
      }
      res.send(ord);
    } catch (e) {
      res.send(e);
    }
  },

  /* allOrders(req, res) {
    let list = {};
    let orders = [];
    Order.findAll()
      .then((res) => {
        return res.map((order) => {
          list[order.orderNumber] = true;
        });
      })
      .then(() => {

        for (id in list) {
          Order.findOne({ where: { orderNumber: id } }).then((ord) =>
            orders.push(ord)
          );
        }
        return orders;
      })
      .then((orders) => console.log(orders));
  }, */

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
      order
        .update({
          status: status,
        })
        .then((order) => {
          res.send(order);
        });
    });
  },
};

module.exports = NewOrderController;
