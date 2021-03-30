const jwt = require("jsonwebtoken");

const checkJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.status(401).send("no puedes entrar a la ruta");

  try {
    const data = jwt.verify(token, "P5");
    const user = await User.findOne({
      where: { email: data.email },
    });

    if (user) req.user = user;

    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = checkJWT;
