const S = require("sequelize");
const db = require("../db");

  
class Order extends S.Model {}
  
  Order.init(
    {
      buyer_name: {
        type: S.STRING,
        allowNull: false,
      },
      delivery_adress: {
        type: S.STRING,
        allowNull: false,
      },
      notes: {
        type: S.TEXT,
      }, 
      buyer_phone_num: {
        type: S.NUMBER,
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