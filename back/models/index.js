const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const Cadeteria = require("./Cadeteria");

User.belongsTo(Cadeteria);
Cadeteria.hasMany(User);

Order.belongsTo(Cadeteria);
Cadeteria.hasMany(Order);

Order.hasMany(Product)
Product.belongsTo(Order)

// Order.belongsToMany(Product, {through:'items'});
// Product.belongsToMany(Order, {through:'items'});

Order.belongsTo(User);
User.hasMany(Order);

module.exports = {
  User,
  Order,
  Cadeteria,
  Product,
};
