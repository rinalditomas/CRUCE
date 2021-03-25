const S = require("sequelize");
const db = require("../db");
const crypto = require ("crypto")

  
class Cadeteria extends S.Model {}
  
  Cadeteria.init(
    {
      nameCompany: {
        type: S.STRING,
        allowNull: false,
      },
      CUIT: {
        type: S.STRING,
        allowNull: false,
        validate:{
            len:[11,11]| {
                msg:"Por favor, ingrese un numero valido"
            }
        }
      },
      email: {
        type: S.STRING,
        allowNull: false,
        unique: true,
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
        type: S.STRING,
        allowNull: false
      },
      phoneNum: {
        type: S.STRING,
        allowNull: false,
        validate:{
            len:[10,10]| {
                msg:"Por favor, ingrese un numero valido"
            }
        }
      },
      address: {
        type: S.STRING,
        allowNull: false
      },
      salt:{
        type:S.STRING,
      }
    },
    { sequelize:db , modelName: "cadeteria" });
 
 
 
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