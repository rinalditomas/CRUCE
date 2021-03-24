const express = require("express");
const router = express.Router();

const RegisterRoutes = require("./registerRoutes");
const LoginRoutes = require("./loginRoutes");
const Me = require("./me");


router.use("/register", RegisterRoutes);
router.use("/login", LoginRoutes);
router.use("/me", Me);


module.exports = router;