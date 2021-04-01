const express = require("express");
const router = express.Router();
const productController = require("../controllers/productRoutes");

router.get("/", productController.findProductsByOrder);


module.exports = router;
