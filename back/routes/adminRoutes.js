const express = require("express");
const router = express.Router();
const cadeteriaController = require("../controllers/cadeteriaRoutes");
const userController = require("../controllers/cadeteRoutes");
//RUTAS CADETERIA
router.get("/allCadeterias", cadeteriaController.allCadeterias);
router.put("/editCadeterias/:id", cadeteriaController.editCadeterias);
router.put("/admitCadeterias/:id", cadeteriaController.admitCadeterias);

// RUTAS CADETE
router.get("/allCadetes", userController.allCadetes);
router.put("/editCadete/:id", userController.editCadete);

module.exports = router;