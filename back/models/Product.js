const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.TEXT,
    },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
