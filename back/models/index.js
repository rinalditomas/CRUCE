const User = require ('./User')
const Order = require ('./Order')
const Cadeteria = require ('./Cadeteria')



User.belongsTo(Cadeteria)
Cadeteria.hasMany(User)

Order.belongsTo(Cadeteria)
Cadeteria.hasMany(Order)

Order.belongsTo(User)
User.hasMany(Order)

module.exports = {
    User,
    Order,
    Cadeteria}