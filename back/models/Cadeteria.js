const Sequelize = require("sequelize");
const db = require("../db/index");

  
class Cadeteria extends Sequelize.Model {}
  
  Cadeteria.init({
      nameCompany: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cuit: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len:[11,11]| {
                msg:"Por favor, ingrese un numero valido"
            }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          isEmail:{
              msg: 'Agrega un correo válido'
          },
          notEmpty:{
              msg:'Favor ingrese un correo electronico'
          }
        }
      }, 
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNum: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            len:[10,10]| {
                msg:"Por favor, ingrese un numero valido"
            }
        }
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salt:{
        type:Sequelize.STRING,
      }
    },{ sequelize: db, modelName: "cadeteria" });


  Cadeteria.addHook("beforeCreate",(cadeteria)=>{
    cadeteria.salt=crypto.randomBytes(20).toString("hex")
    cadeteria.password = cadeteria.hashPassword(cadeteria.password)
  })
  Cadeteria.prototype.hashPassword=function(password){
    return crypto.createHmac ("Sha1", this.salt).update(password).digest("hex")
  }
  Cadeteria.prototype.validPassword = function(passwordEnLogin){
    return this.password === this.hashPassword(passwordEnLogin)
  }
  
  module.exports = Cadeteria;