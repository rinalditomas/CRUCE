const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerRoutes");

router.post("/", registerController.register);
router.get("/bringCadeterias", registerController.bringCadeterias);

module.exports = router;
