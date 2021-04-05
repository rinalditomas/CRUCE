const express = require("express");
const router = express.Router();

const RegisterRoutes = require("./registerRoutes");
const LoginRoutes = require("./loginRoutes");
const ordersRoutes = require("./ordersRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const Me = require("./me");


router.use("/me", Me);
router.use("/register", RegisterRoutes);
router.use("/orders", ordersRoutes);
router.use("/product", productRoutes);
router.use("/login", LoginRoutes);
router.use("/admin", adminRoutes);



module.exports = router;
