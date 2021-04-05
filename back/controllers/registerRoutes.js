const { User,Cadeteria } = require("../models");


const registerController = {
  register(req, res) {
    console.log(req.body);
    User.create(req.body)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((err) => res.send(err));
  },
  bringCadeterias(req, res, next){
    Cadeteria.findAll()
    .then (cadeterias => {
        res.send (cadeterias)
    })
    .catch (error =>{
        next (error)
    })
  }
};

module.exports = registerController;
