const User = require("./User");
const Order = require("./Order");
const Cadeteria = require("./Cadeteria");
<<<<<<< HEAD
const Product = require("./Product");
=======
const Product = require("./Product")
>>>>>>> 4960e63fde1112cea6971ff79b0829f1c2fd9dd8

User.belongsTo(Cadeteria);
Cadeteria.hasMany(User);

Order.belongsTo(Cadeteria);
Cadeteria.hasMany(Order);

Order.belongsTo(User);
User.hasMany(Order);

<<<<<<< HEAD
Product.belongsTo(Order);
Order.hasMany(Product);
=======
/* 
////
Product.belongsTo(Order)
Order.hasMany(Product)
 */
>>>>>>> 4960e63fde1112cea6971ff79b0829f1c2fd9dd8

module.exports = {
  User,
  Order,
  Cadeteria,
  Product,
};
