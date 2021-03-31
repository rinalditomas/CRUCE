const express = require("express");
const router = express.Router();

const RegisterRoutes = require("./registerRoutes");
const LoginRoutes = require("./loginRoutes");
const ordersRoutes = require("./ordersRoutes");
const adminRoutes = require("./adminRoutes");
const Me = require("./me");

router.use("/register", RegisterRoutes);
router.use("/orders", ordersRoutes);
router.use("/login", LoginRoutes);
router.use("/admin", adminRoutes);

router.use("/me", Me);

module.exports = router;
