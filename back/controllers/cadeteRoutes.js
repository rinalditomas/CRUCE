const { User } = require("../models/index");
const jwt = require("jsonwebtoken");

const userController = {
  allCadetes(req, res, next) {
    User.findAll()
    .then (cadete => {
        res.send (cadete)
    })
    .catch (error =>{
        next (error)
    })
  },
  editCadete(req, res, next){
      console.log(req.params.id, "ACA ESTA EL REQ.PARAMSSSSSSSSSSSSSSS")
   User.findByPk(req.params.id)
   .then((cadete)=>{cadete.update({
       active: !cadete.active
      }).then(res.sendStatus(200))
      .catch("hubo un error")
})}

    }
module.exports = userController;