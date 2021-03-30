const express = require("express");
const router = express.Router();
const NewOrderController = require("../controllers/orderRoutes");

router.post("/", NewOrderController.newOrder);

module.exports = router;
