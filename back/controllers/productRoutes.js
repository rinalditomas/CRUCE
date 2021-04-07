const { Order, Product } = require("../models");
const sequelize = require("sequelize");

const productController = {
  async findProductsByOrder(req, res, next) {
    const orderNumber = "1119561076530-01";
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
