const { Order, Product } = require("../models");

const sequelize = require("sequelize");
const { count } = require("../models/User");

const productController = {
  async findProductsByOrder(req, res, next) {
    const orderNumber = "1119561076530-01";
    const productSku = "3417";

    const products = await Product.findAndCountAll({
      where: { orderNumber },
      attributes: [
        "productSku",
        sequelize.fn("count", sequelize.col("productSku")),
      ],
      group: ["productSku"],
    }).catch((e) => console.log(e));
    res.send(products);
  },
};

module.exports = productController;
