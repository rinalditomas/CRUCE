const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {}

Product.init(
  {
<<<<<<< HEAD
    name: {
      type: S.TEXT,
    },
  },
=======
    productSku: {
      type: S.STRING,
      allowNull: false,
    },
    productName: {
      type: S.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: S.STRING,
      allowNull: false,
    },
  },

>>>>>>> 4960e63fde1112cea6971ff79b0829f1c2fd9dd8
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
