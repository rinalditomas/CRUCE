const { Cadeteria } = require("../models/index");
const jwt = require("jsonwebtoken");

const cadeteriaController = {

  allCadeterias(req, res, next) {
    Cadeteria.findAll()
      .then((cadeterias) => {
        res.send(cadeterias);
      })
      .catch((error) => {
        next(error);
      });
  },
  
  editCadeterias(req, res, next) {
    Cadeteria.findByPk(req.params.id).then((cadeteria) => {
      cadeteria
        .update({
          active: !cadeteria.active,
        })
        .then(res.sendStatus(200))
        .catch("hubo un error");
    });
  },
  admitCadeterias(req, res, next) {
    Cadeteria.findByPk(req.params.id).then((cadeteria) => {
      console.log(cadeteria, "ANTES DE CAMBIAR");
      cadeteria
        .update({
          active: !cadeteria.active,
          authorized: !cadeteria.authorized,
        })
        .then((cadeteria) => {
          console.log("DESPUES DE CAMBIAR", cadeteria);
        })
        .then(res.sendStatus(200))
        .catch("hubo un error");
    });
  },

  registerCadeteria(req, res) {
    console.log('llegando', req.body)
    Cadeteria.create(req.body)
      .then((cadeteria) => res.status(201).send(cadeteria))
      .catch((err) => res.send(err));
  },

};
module.exports = cadeteriaController;
