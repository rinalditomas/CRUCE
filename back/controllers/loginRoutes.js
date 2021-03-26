const { User } = require("../models/index");
const jwt = require("jsonwebtoken");

const loginController = {
  loginUser(req, res, next) {
    const { email, password } = req.body;
    User.findOne({
      where: { email },
    })
      .then((user) => {
        const isValid = user.validPassword(password);

        if (!user) return res.status(401).send("El usuario no existe");
        if (isValid !== true) return res.send("Password incorrecto");

        const token = jwt.sign(
          { email, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          "P5"
        );
        console.log('TOKEN =>', token)
        return res.status(200).json({ token, user });
      })
      .catch((e) => {
        console.log(e);
        res.status(401).send("Error en autenticación");
      });
  },

  logoutUser(req, res, next) {
    res.status(200).send("Usuario deslogeado con éxito");
  },
};

module.exports = loginController;
