const S = require("sequelize");
const db = require("../db");
const crypto = require ("crypto")

  
class User extends S.Model {}
  User.init(
    {
      first_name: {
        type: S.STRING,
        allowNull: false,
      },
      last_name: {
        type: S.STRING,
        allowNull: false,
      },
      email: {
        type: S.STRING,
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
        type: S.STRING,
        allowNull: false
      },
      phone_num: {
        type: S.NUMBER,
        allowNull: false,
        validate:{
            len:[10,10]| {
                msg:"Por favor, ingrese un numero valido"
            }
        }
      },
      isAdmin: {
        type: S.BOOLEAN,
        defaultValue: false
      },
      vehicle: {
        type: Sequelize.ENUM({
            values: ['bicicleta', 'auto','moto']
          }),
      },
      salt:{
        type:S.STRING,
      }
    },
    { sequelize: db, modelName: "user" }
  );
  User.addHook("beforeCreate",(user)=>{
    user.salt=crypto.randomBytes(20).toString("hex")
    user.password = user.hashPassword(user.password)
  })
  User.prototype.hashPassword=function(password){
    return crypto.createHmac ("Sha1", this.salt).update(password).digest("hex")
  }
  User.prototype.validPassword = function(passwordEnLogin){
    return this.password === this.hashPassword(passwordEnLogin)
  }
  
  module.exports = User;