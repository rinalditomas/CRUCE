const { User } = require("../models/index");
const jwt = require("jsonwebtoken");

const loginController = {
  loginUser(req, res, next) {
    const { email, password } = req.body;
    const toStr= password.toString()
    User.findOne({
      where: { email },
    })
      .then((user) => {
        const isValid = user.validPassword(toStr);
        if (!user){
          return res.sendStatus(401)
        } 
        if (isValid !== true){
          return res.sendStatus(400);
        } 
        const token = jwt.sign(
          {id:user.id,email:user.email,firsName:user.firstName,admin:user.admin},
          "P5"
        );
        console.log('TOKEN =>', token)
        return res.status(200).json({ token});
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
