const express = require("express");
const router = express.Router();
const tokenMiddleware = require("./tokenMiddleware");
const { User } = require ("../models/index");  // revisar posteriormente


 
router.get("/", tokenMiddleware, (req, res, next) => {  //usuario esta en el middleware
    User.findByPk(req.user.id)
    .then(user => res.status(200).json(user))
    .catch(next)
})

module.exports = router