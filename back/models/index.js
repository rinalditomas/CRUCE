const User = require("./User");
const Order = require("./Order");
const Cadeteria = require("./Cadeteria");
const Product = require("./Product");

User.belongsTo(Cadeteria);
Cadeteria.hasMany(User);

Order.belongsTo(Cadeteria);
Cadeteria.hasMany(Order);

Order.belongsTo(User);
User.hasMany(Order);

Product.belongsTo(Order);
Order.hasMany(Product);

module.exports = {
  User,
  Order,
  Cadeteria,
};
