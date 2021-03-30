const { Order } = require("../models");

const NewOrderController = {
  newOrder(req, res) {
    console.log(req.body);
    // Order.bulkCreate(req.body)
    //   .then((orders) => {
    //     res.status(201).send(user);
    //   })
    //   .catch((err) => res.send(err));
  },
};

module.exports = NewOrderController;