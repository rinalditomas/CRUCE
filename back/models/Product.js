const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {}

Product.init(
{
    productName: {
        type: S.STRING,
        allowNull: false,
      },

},{ sequelize: db, modelName: "product" }
);

module.exports = Product;