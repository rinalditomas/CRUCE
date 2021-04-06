const { User, Cadeteria } = require("../models");

const registerController = {

  register(req, res) {
    console.log(req.body);
    User.create(req.body)
      .then((user) => {
        res.status(201).send(user);
      })
      .catch((err) => res.send(err));
  },


};

module.exports = registerController;
