const Sequelize = require("sequelize");
const db = require("../db/index");
const crypto = require ("crypto")

  
class User extends Sequelize.Model {}
  User.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
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
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      vehicle: {
        type: Sequelize.ENUM({
            values: ['bicicleta', 'auto','moto']
          }),
      },
      salt:{
        type:Sequelize.STRING,
      }
    },{ sequelize: db, modelName: "user" });


  User.addHook("beforeCreate",(user)=>{
    user.salt=crypto.randomBytes(20).toString("hex")
    user.password = user.hashPassword(user.password)
  });

  User.prototype.hashPassword=function(password){
    return crypto.createHmac ("Sha1", this.salt).update(password).digest("hex")
  };

  User.prototype.validPassword = function(passwordEnLogin){
    return this.password === this.hashPassword(passwordEnLogin)
  };
  
  module.exports = User;