const sequelize = require('sequelize')
const db = require ('../db/index')
const User = require ('./User')
const Order = require ('./Order')
const Cadeteria = require ('./Cadeteria')

Cadeteria.hasMany(User)
Cadeteria.hasMany(Order)
User.hasMany(Order)
User.belongsTo(Cadeteria)
Order.belongsTo(Cadeteria)
Order.belongsTo(User)

module.exports = {User,Order,Cadeteria}