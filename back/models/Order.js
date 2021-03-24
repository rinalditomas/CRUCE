const S = require("sequelize");
const db = require("../db");

  
class Order extends S.Model {}
  
  Order.init(
    {
      buyerName: {
        type: S.STRING,
        allowNull: false,
      },
      deliveryAdress: {
        type: S.STRING,
        allowNull: false,
      },
      notes: {
        type: S.TEXT,
      }, 
      buyerPhoneNum: {
        type: S.STRING,
        allowNull: false,
      },
      status: {
        type: S.ENUM({
            values: ['Pendiente de retiro en sucursal', 'En camino','Entregado','Devuelto a sucursal'],
            defaultValue: 'Pendiente de retiro en sucursal'
        }),
      }
},{ sequelize: db, modelName: "order" });

  
  module.exports = Order;