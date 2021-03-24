const Sequelize = require("sequelize");
const db = require("../db/index");

  
class Order extends Sequelize.Model {}
  
  Order.init(
    {
      buyerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAdress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notes: {
        type: Sequelize.TEXT,
      }, 
      buyerPhoneNum: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM({
            values: ['Pendiente de retiro en sucursal', 'En camino','Entregado','Devuelto a sucursal'],
            defaultValue: 'Pendiente de retiro en sucursal'
        }),
      }
},{ sequelize: db, modelName: "order" });

  
  module.exports = Order;