const {User}  = require("../models");

const registerController = {
    register(req, res) {
        User.create(req.body).then((user) => {
            res.status(201).send(user);
          });
    },
     
}

module.exports = registerController;