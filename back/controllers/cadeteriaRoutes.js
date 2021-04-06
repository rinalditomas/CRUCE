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
        .then((cadeteria) => res.status(200).send(cadeteria))
        .catch("hubo un error");
    });
  },
  admitCadeterias(req, res, next) {
    Cadeteria.findByPk(req.params.id).then((cadeteria) => {
      cadeteria
        .update({
          active: !cadeteria.active,
          authorized: !cadeteria.authorized,
        })
        .then((cadeteria) => {
          console.log("ACAAAAAAAAA", cadeteria);
          return cadeteria;
        })
        .then((cadeteria) => res.status(200).send(cadeteria));
    });
  },
};
module.exports = cadeteriaController;
