const { User, Cadeteria } = require("../models");

const registerController = {
  register(req, res) {
    console.log("registro de usuario", req.body);
    // const {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    //   phoneNum,
    //   admin,
    //   vehicle,
    //   cadeterias,
    // } = req.body;
    Cadeteria.findOne({
      where: {
        nameCompany: req.body.cadeterias,
      },
    })
      .then((cadeteria) => {
        User.create(req.body)
          .then((user) => {
            cadeteria
              .setUsers(user)
              .then(() =>
                User.findOne({
                  where: {
                    id: user.id,
                  },
                })
              )
              .then((userSet) => res.status(200).send(userSet));
          })
          .catch(({ errors }) => res.status(500).send(errors[0].message));
      })
      .catch((err) => res.send(err));
  },
  // .catch((err) => res.send(err));
};

module.exports = registerController;
