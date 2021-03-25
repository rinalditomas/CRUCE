const express = require("express");
const router = express.Router();
const tokenMiddleware = require("./tokenMiddleware");
const { User } = require("../models/index"); // revisar posteriormente

router.get("/", tokenMiddleware, (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // Token
  const user = req.user; // Objeto user
  res.json({ token, user });
});

module.exports = router;
