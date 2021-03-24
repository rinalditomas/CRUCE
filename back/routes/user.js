const express = require("express");
const router = express.Router()
const User = require ('../models/User')

router.post("/register", (req, res,next) => {  
    console.log('estoy aca')
    
    User.create(req.body)
      .then((user) => {
      res.status(201).send(user)})
      .catch(next)
});