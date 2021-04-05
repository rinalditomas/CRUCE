const express = require("express");
const router = express.Router();
const cadeteriaController = require("../controllers/cadeteriaRoutes");

router.post("/register", cadeteriaController.registerCadeteria);
router.get("/allCadeterias", cadeteriaController.allCadeterias);

module.exports = router;
